import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { User } from '../../../app/shared/models/account/user';
import { RegisterWithExternalGoogle } from '../../shared/models/account/registerWithExternalGoogle';
import { RegisterWithExternalFacebook } from '../../shared/models/account/registerWithExternalFacebook';

@Component({
  selector: 'app-register-with-third-party',
  standalone: false,
  templateUrl: './register-with-third-party.component.html',
  styleUrls: ['./register-with-third-party.component.css']
})
export class RegisterWithThirdPartyComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted = false;
  provider: string | null = null;
  access_token: string | null = null;
  userId: string | null = null;
  email: string | null = null;
  userName: string | null = null;
  errorMessages: string[] = [];

  constructor(private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.accountService.user$.pipe(take(1)).subscribe({
      next: (user: User | null) => {
        if (user) {
          this.router.navigateByUrl('/');
        } else {
          this.activatedRoute.queryParamMap.subscribe({
            next: (params: any) => {
              this.provider = this.activatedRoute.snapshot.paramMap.get('provider');
              this.access_token = params.get('access_token');
              this.userId = params.get('userId');
              this.email = params.get('email');
              this.userName = params.get('userName');

              if (this.provider && this.access_token && this.userId &&
                (this.provider === 'facebook' || this.provider === 'google')) {

                this.initializeForm();
              } else {
                this.router.navigateByUrl('/account/register');
              }
            }
          })
        }
      }
    })
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  register() {
    this.submitted = true;
    this.errorMessages = [];
    if (this.provider == "facebook") {
      if (this.registerForm.valid && this.userId && this.access_token) {
        const firstName = this.registerForm.get('firstName')?.value;
        const lastName = this.registerForm.get('lastName')?.value;

        const model = new RegisterWithExternalFacebook(firstName, lastName, this.userId, this.access_token, this.provider);
        this.accountService.registerWithThirdPartyFacebook(model).subscribe({
          next: _ => {
            this.router.navigateByUrl('/');
          }, error: error => {
            if (error.error.errors) {
              this.errorMessages = error.error.errors;
            } else {
              this.errorMessages.push(error.error);
            }
          }
        })
      }
    }

    if (this.registerForm.valid && this.userId && this.access_token && this.provider && this.email && this.userName) {
      const firstName = this.registerForm.get('firstName')?.value;
      const lastName = this.registerForm.get('lastName')?.value;

      const model = new RegisterWithExternalGoogle(firstName, lastName, this.userId, this.access_token, this.provider, this.email, this.userName);
      this.accountService.registerWithThirdPartyGoogle(model).subscribe({
        next: _ => {
          this.router.navigateByUrl('/');
        }, error: error => {
          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        }
      })
    }
  }
}

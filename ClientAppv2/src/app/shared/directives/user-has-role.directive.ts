import { Directive } from '@angular/core';

@Directive({
  selector: '[appUserHasRole]',
  standalone: false
})
export class UserHasRoleDirective {

  constructor() { }

}

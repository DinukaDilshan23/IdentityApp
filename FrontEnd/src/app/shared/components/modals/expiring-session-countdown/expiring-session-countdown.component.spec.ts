import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringSessionCountdownComponent } from './expiring-session-countdown.component';

describe('ExpiringSessionCountdownComponent', () => {
  let component: ExpiringSessionCountdownComponent;
  let fixture: ComponentFixture<ExpiringSessionCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiringSessionCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiringSessionCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

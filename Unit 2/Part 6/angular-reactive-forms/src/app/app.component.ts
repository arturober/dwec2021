import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { matchEmail } from './validators/match-email.validator';
import { minDateValidator } from './validators/min-date.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userForm!: FormGroup;
  phones!: FormArray;
  title = '';

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          emailConfirm: ['', [Validators.required, Validators.email]],
        }, {
          validators: matchEmail
        }
      ),
      phone: ['', Validators.pattern(/[0-9]{9,}/)],
      notifications: 'email',
      password: ['', [Validators.required, Validators.minLength(5)]],
      birthDate: ['', minDateValidator('1900-01-01')],
      phones: this.fb.array([this.getPhoneControl()]),
    });

    this.userForm.controls['notifications'].valueChanges.subscribe(
      notif => this.updateNotifMethod(notif)
    );

    this.phones = this.userForm.controls['phones'] as FormArray;
  }

  getPhoneControl(): FormControl {
    const control = this.fb.control('');
    control.setValidators(Validators.pattern(/[0-9]{9,}/));
    return control;
  }

  addPhone() {
    (<FormArray>this.userForm.get('phones')).push(this.getPhoneControl());
  }


  setDemoData() {
    this.userForm.setValue({
      name: 'Test user',
      email: 'test@test.com',
      password: 'test',
    });
  }

  updateNotifMethod(notif: string) {
    const phoneControl = this.userForm.controls['phone'];
    if (notif === 'phone') {
      phoneControl.setValidators([
        Validators.required,
        Validators.pattern(/[0-9]{9,}/),
      ]);
    } else {
      // email (Phone not required)
      phoneControl.setValidators([Validators.pattern(/[0-9]{9,}/)]);
    }
    phoneControl.updateValueAndValidity();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-reactive-form',
  templateUrl: './learning-reactive-form.component.html',
  styleUrls: ['./learning-reactive-form.component.css']
})
export class LearningReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female'];
  forbiddenName = ['Test'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl('', [Validators.required, this.forBiddenNames.bind(this)]),
        'email': new FormControl('', [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'secret': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'getHobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  addHobbies() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signupForm.get('getHobbies')).push(control);
    // casting the value using formarray that is his type
  }
  forBiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'email is forbidden': true});
          } else {
            resolve(null);
          }
        }, 10000);
      });
    return promise;
  }
}

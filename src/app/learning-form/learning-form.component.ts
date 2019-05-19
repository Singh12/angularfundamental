import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-learning-form',
  templateUrl: './learning-form.component.html',
  styleUrls: ['./learning-form.component.css']
})
export class LearningFormComponent implements OnInit {
  @ViewChild('f') formValue: NgForm;
  selectValue = 'teacher';
  genders = ['male', 'female'];
  answer = '';
  displayValue = false;
  userdata = {
    'name': '',
    'email': '',
    'question': '',
    'gender': '',
    'message': ''
  };
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
this.signupForm = new FormGroup({
  'username': new FormControl(null, Validators.required)
});
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  suggestUserName() {
    // this.formValue.setValue({
    //   usergroup: {
    //     username: 'rajnish',
    //     email: 'rajnishmca20@gmail.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.formValue.form.patchValue(
      { usergroup: { username: 'rajnish'}}
    );
  }
  onSubmit() {
    this.displayValue = true;
    console.log(this.formValue);
    this.userdata.name = this.formValue.value.usergroup.username;
    this.userdata.email = this.formValue.value.usergroup.email;
    this.userdata.message = this.formValue.value.questionAnswer;
    this.userdata.gender = this.formValue.value.gender;
    this.userdata.question = this.formValue.value.secret;
    this.formValue.reset();
  }
}

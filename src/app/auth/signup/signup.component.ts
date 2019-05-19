import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServices } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private autService: AuthServices) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    // reach out from fire base
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.autService.signupUser(email, password);
  }
}

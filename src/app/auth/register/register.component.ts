import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/RegisterForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: RegisterForm = {
    fullname: '',
    email: '',
    password: '',
    confirm_password: ''
  }

  signUpSubmit = () => {
    console.log(this.form);
  }
}

import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: LoginForm = {
    email: '',
    password: '',
  }

  logInSubmit = () => {
    console.log(this.form);
  }
}

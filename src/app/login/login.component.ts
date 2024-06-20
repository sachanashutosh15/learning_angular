import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  loginData = {
    username: '',
    password: '',
  };

  login() {
    if (
      this.loginService.login(this.loginData.username, this.loginData.password)
    ) {
      alert('Login Successfull.');
      // this.router.navigate(['/rooms', 'new']);
      this.router.navigateByUrl('/rooms');
    }
  }
}

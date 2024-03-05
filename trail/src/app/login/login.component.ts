import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private form: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.form.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      if (response) {
        this.authService.saveUserData(response);
        if (this.authService.getUserData().rol == 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/rent']);
        }
      } else {
      }
    });
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.loginForm.get(controlName)?.hasError(errorType) &&
      this.loginForm.get(controlName)?.touched
    );
  }

  enviar() {
    console.log(this.loginForm);
  }
}

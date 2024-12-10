import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherMail } from '@ng-icons/feather-icons';
import { heroKey } from '@ng-icons/heroicons/outline';
import { AuthenticationService } from '../../../services/account/authentication.service';

@Component({
  selector: 'app-authentication',
  imports: [NgIconComponent, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
  providers: [provideIcons({
    featherMail,
    heroKey
   })]
})
export class AuthenticationComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login', { email, password });
      this.authService.login(email, password);
      // Perf
    }
  }

}

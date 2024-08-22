import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      const isSuccess = this.authService.signIn(email, password);

      if (isSuccess) {
        console.log('Sign in successful!');
     
      }
  }
}
}
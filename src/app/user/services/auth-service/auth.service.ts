import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  signIn(email: string, password: string): boolean {
    // Logic for signing in
    if (email && password) {
      this.isAuthenticated = true;
      this.router.navigate(['/menu']);
      return true;
    }
    return false;
  }

  signUp(username: string, email: string, mobile: string, password: string): boolean {
    // Logic for signing up (e.g., send data to a backend service)
    if (username && email && mobile && password) {
      this.isAuthenticated = true;
      this.router.navigate(['/menu']);
      return true;
    }
    return false;
  }

  signOut() {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private loggedInUserEmail: string = '';

  constructor() { }

  login(email: string): void {
    this.isLoggedIn = true;
    this.loggedInUserEmail = email;
    localStorage.setItem('loggedInUserEmail', email);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUserEmail = '';
    localStorage.removeItem('loggedInUserEmail');
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }

  initAuth(): void {
    const userEmail = localStorage.getItem('loggedInUserEmail');
    if (userEmail) {
      this.login(userEmail);
    }
  }
}

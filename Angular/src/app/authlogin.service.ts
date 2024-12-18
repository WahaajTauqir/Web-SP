import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<{ username: string | null; email: string | null } | null>(null);

  getCurrentUser(): Observable<{ username: string | null; email: string | null } | null> {
    return this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: { username: string; email: string }): void {
    console.log('Setting current user:', user);
    this.currentUserSubject.next(user);
  }

  clearCurrentUser(): void {
    console.log('Clearing current user');
    this.currentUserSubject.next(null);
  }

  logout(): void {
    this.clearCurrentUser();
  }
}

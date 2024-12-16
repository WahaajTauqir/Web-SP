import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<{ username: string | null; email: string | null } | null>(null);

  constructor() {}
  getCurrentUser(): Observable<{ username: string | null; email: string | null } | null> {
    return this.currentUserSubject.asObservable();
  }
  setCurrentUser(user: { username: string; email: string }): void {
    this.currentUserSubject.next(user);
  }
  clearCurrentUser(): void {
    this.currentUserSubject.next(null);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, email, password });
  }
}

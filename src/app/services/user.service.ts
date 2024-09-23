import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDTO } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  ping() {
    return this.http.get<{ message: string }>(environment.API_URL + "/api/");
  }

  register(model: RegisterUserDTO) {
    return this.http.post<any>(environment.API_URL + "/api/register", model);
  }
}

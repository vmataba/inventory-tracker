import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../store/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loadInfo(){
    return this.httpClient.get<User>('https://randomuser.me/api')
  }
}

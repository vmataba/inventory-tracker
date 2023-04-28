import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../store/models/user.model";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  loadInfo() {
    return this.httpClient.get<User[]>('assets/db/users.json')
  }

  logout() {
    //TODO: add real logic
    return of(undefined);
  }
}

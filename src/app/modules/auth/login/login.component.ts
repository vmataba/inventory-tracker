import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {login} from "../../../store/actions/auth.action";
import {Observable} from "rxjs";
import {getError, getLoading} from "../../../store/selectors/auth.selector";
import {Error} from "../../../store/models/error.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup

  loading$: Observable<boolean>

  error$: Observable<Error | undefined>

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.form = formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.loading$ = store.select(getLoading)
    this.error$ = store.select(getError)
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }

  login() {
    this.store.dispatch(login({credentials: {username: this.username?.value, password: this.password?.value}}))
  }
}

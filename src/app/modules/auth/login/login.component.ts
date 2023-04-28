import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {login} from "../../../store/actions/auth.action";
import {Observable} from "rxjs";
import {getError, getIGuest, getLoading} from "../../../store/selectors/auth.selector";
import {Error} from "../../../store/models/error.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  loading$: Observable<boolean>

  error$: Observable<Error | undefined>

  isGuest$: Observable<boolean>

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {
    this.form = formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.loading$ = store.select(getLoading)
    this.error$ = store.select(getError)
    this.isGuest$ = store.select(getIGuest)
  }

  ngOnInit() {
    this.isGuest$.subscribe(isGuest => {
      if (!isGuest) {
        this.router.navigate(['/']).then()
      }
    })
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

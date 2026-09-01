import { Component, signal } from '@angular/core'
import { Card } from 'primeng/card'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Button } from 'primeng/button'
import { InputText } from 'primeng/inputtext'
import { Password } from 'primeng/password'

@Component({
  selector: 'app-auth',
  imports: [Card, FormsModule, ReactiveFormsModule, Button, InputText, Password],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  mode = signal<'login' | 'register'>('login')

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(8)],
    }),
  })

  submit() {
    if (this.mode() == 'login') {
      this.login()
    } else {
      this.createAccount()
    }
  }
  toggleMode() {
    this.mode.update((value) => (value === 'login' ? 'register' : 'login'))
  }
  login() {
    console.log(this.form.getRawValue())
  }
  createAccount() {
    console.log(this.form.getRawValue())
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatFormField,
    MatButton,
    MatInput
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
  }

  onSubmitLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.userService.login(loginData)
      .subscribe(response => {
        this.router.navigate(['/']);
      }, error => {
        // Handle login errors (e.g., display error message)
      });
  }
}

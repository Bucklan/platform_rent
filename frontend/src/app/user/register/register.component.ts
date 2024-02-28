import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';


  constructor(private userService: UserService,private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitRegister() {
    // console.log(4532432);
    const registerData = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    if (this.password.length < 6) {
      console.log('Password must be at least 6 characters');
      return;
    }
    if (this.name.length < 3) {
      console.log('Name must be at least 3 characters');
      return;
    }
    this.userService.register(registerData)
      .subscribe(response => {
        this.router.navigate(['/login']);
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
}

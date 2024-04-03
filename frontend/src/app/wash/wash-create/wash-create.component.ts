import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {WashService} from "../wash.service";
import {Wash} from "../wash";

@Component({
  selector: 'app-wash-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatInput,
    MatFormField,
    FormsModule,
    MatButton
  ],
  templateUrl: './wash-create.component.html',
  styleUrl: './wash-create.component.css'
})
export class WashCreateComponent {
  wash: Wash = {
    name: '',
    address: '',
    open: false,
    image: '',
  }
  error: any;
  submitted = false;

constructor(private washService: WashService, private router: Router) {
  }


  addWash() {
    this.washService.create(this.wash).subscribe(response => {

        this.submitted = true;
        return this.router.navigateByUrl('/wash/index');
      },
      error => {
        this.error = error.error.error;
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

  newWash() {

  }
}

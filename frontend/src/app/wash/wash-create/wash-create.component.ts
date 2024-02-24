import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {WashService} from "../wash.service";
import {FormGroup, FormsModule} from "@angular/forms";
import {Wash} from "../wash";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wash-create',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    NgIf
  ],
  templateUrl: './wash-create.component.html',
  styleUrl: './wash-create.component.css'
})
export class WashCreateComponent {

  wash: Wash = {
    name: '',
    address: '',
    open: false,
  };

  submitted = false;


  constructor(private service: WashService) {
  }
  saveWash(): void {
    const data = {
      name: this.wash.name,
      address: this.wash.address,
      open: this.wash.open
    };

    this.service.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newWash(): void {
    this.submitted = false;
    this.wash = {
      name: '',
      address: '',
      open: false
    };
  }
}

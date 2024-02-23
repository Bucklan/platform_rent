import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {Wash} from "../wash";
import {WashService} from "../wash.service";
import {MatList} from "@angular/material/list";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'wash-index',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCheckbox,
    MatList,
    NgForOf
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class WashIndexComponent {
  washes: Wash[] = []

  constructor(private washService: WashService) {}

  // ngOnInit(): void {
  //   this.getWashes();
  // }
  //
  // getWashes(): void {
  //   this.washService.index()
  //     .subscribe(washes => this.washes = washes);
  // }


}

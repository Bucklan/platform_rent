import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {WashCreateComponent} from "../wash-create/wash-create.component";

@Component({
  selector: 'wash-index',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatButton,
    MatCardImage,
    NgIf,
    MatIconButton,
    RouterLink
  ],
  templateUrl: './wash-index.component.html',
  styleUrl: './wash-index.component.css',
})
export class WashIndexComponent implements OnInit{
  washes: any[] = []
  http = inject(HttpClient);
  getUrl = 'http://localhost:4444/api/washes';
  ngOnInit(): void {
    this.getWashes();
  }

  getWashes(): void {
    this.http.get(this.getUrl).subscribe((res: any) => {
      this.washes = res;
    });
  }

}

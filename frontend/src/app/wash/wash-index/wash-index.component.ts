import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  MatCard, MatCardActions,
  MatCardAvatar, MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'wash-index',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatCardAvatar,
    MatButton,
    RouterLink,
    MatCardActions,
    MatCardContent,
    NgForOf,
    NgIf
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

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
import {WashService} from "../wash.service";
import {Wash} from "../wash";
import {MatTable} from "@angular/material/table";

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
    NgIf,
    MatTable
  ],
  templateUrl: './wash-index.component.html',
  styleUrl: './wash-index.component.css',
})
export class WashIndexComponent implements OnInit {
  constructor(private WashService: WashService,) {
  }
  washes: Wash[] = []
  // http = inject(HttpClient);
  // getUrl = 'http://localhost:4444/api/washes';
  ngOnInit(): void {
    this.getWashes();
  }

  getWashes(): void {
    this.WashService.index().subscribe((res: any) => {
      this.washes = res;
    });
  }

  deleteWash(id: number) {
    this.WashService.destroy(id).subscribe((wash: Wash) => {
      this.washes = this.washes.filter((wash: Wash) => wash._id !== id);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";
import {User} from "./user";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatList,
    NgIf,
    MatIcon,
    MatLine,
    NgForOf,
    MatListItem,
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  users: User[] = [];
  loading: boolean = true; // Flag to indicate data loading
  displayedColumns: string[] = ['_id','name', 'email','have_car','interesting_sport','interesting_books']; // Adjust columns based on your data
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true; // Set loading flag while fetching data
    this.userService.index()
      .subscribe(users => {
        this.users = users;
        this.loading = false; // Set loading flag to false after data retrieved
      });
  }
}

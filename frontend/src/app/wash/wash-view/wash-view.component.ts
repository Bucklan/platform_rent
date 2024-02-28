import {Component, Input, OnInit} from '@angular/core';
import {Wash} from "../wash";
import {WashService} from "../wash.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'wash-view',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './wash-view.component.html',
  styleUrl: './wash-view.component.css'
})
export class WashViewComponent implements OnInit{
  @Input() viewMode = false;

  @Input() wash: Wash = {
    name: '',
    address: '',
    open: false
  };

  message = '';

  constructor(
    private WashService: WashService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: number): void {
    this.WashService.view(id).subscribe({
      next: (data) => {
        this.wash = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      name: this.wash.name,
      address: this.wash.address,
      open: status
    };

    this.message = '';

    this.WashService.update(this.wash._id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.wash.open = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTutorial(): void {
    this.message = '';

    this.WashService
      .update(this.wash._id, this.wash)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.WashService.destroy(this.wash._id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e)
    });
  }
}

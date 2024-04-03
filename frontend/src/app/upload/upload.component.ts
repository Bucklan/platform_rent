import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadStatus: string | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      this.uploadStatus = "Please select a file.";
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://127.0.0.1:4444/upload', formData)
      .subscribe(
        (response: any) => {
          this.uploadStatus = "File uploaded successfully.";
        },
        (error) => {
          this.uploadStatus = "Error uploading file.";
          console.error('Error uploading file:', error);
        }
      );
  }
}

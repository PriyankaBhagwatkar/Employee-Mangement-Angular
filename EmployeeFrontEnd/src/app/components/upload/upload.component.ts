import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadForm: FormGroup;
  responseMessage: string | undefined;
  responseColor: string | undefined;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.uploadForm = this.formBuilder.group({
      file: [''],
      empId: ['']
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        file: file
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file')?.value);
    formData.append('empId', this.uploadForm.get('empId')?.value);

    this.httpClient.post<any>('http://localhost:8080/upload', formData).subscribe(
      (response) => {
        this.responseMessage = response.message;
        this.responseColor = 'green';
      },
      (error) => {
        this.responseMessage = 'Upload failed';
        this.responseColor = 'red';
      }
    );
  }
}

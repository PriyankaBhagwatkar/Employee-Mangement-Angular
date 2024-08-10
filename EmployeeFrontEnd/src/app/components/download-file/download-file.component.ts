import { Component, OnInit } from '@angular/core';
import { FileService, FileData } from '../../service/file.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrl: './download-file.component.css'
})
export class DownloadFileComponent implements OnInit {



  files: FileData[] = [];
  empId: string = ''; // Replace with the actual employee ID you want to use
  message: string = '';
  status: string = '';

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getAllFiles().subscribe(
      (data: any) => {
        this.status = data.status;
        this.message = data.message;
        this.files = data.data;
      },
      (error) => {
        console.error('Error fetching files', error);
        this.status = 'error';
        this.message = 'Failed to fetch files';
      }
    );
  }
  downloadFile(fileName: string): void {
    // Logic to download the file, you can use file service or direct URL redirection
    window.open(`http://localhost:8080/download/${fileName}`, '_blank');
  }
}

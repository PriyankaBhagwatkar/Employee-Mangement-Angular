import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FileData {
  id: number;
  fileName: string;
  fileType: string;
  fileSize: number;
  employeeId: number;
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl = 'http://localhost:8080/getAllFiles'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<FileData[]> {
    return this.http.get<FileData[]>(this.apiUrl);
  }
}

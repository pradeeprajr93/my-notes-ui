import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient, private appService: AppService) { }

  getNotes(): Promise<Note[]> {
    return this.http
    .get<Note[]>(this.appService.getEnvironment().API_CONNECTION_STRING)
    .toPromise();
  }

  createNote(note: Note): Promise<Note> {
    return this.http
    .post<Note>(`${this.appService.getEnvironment().API_CONNECTION_STRING}`, note)
    .toPromise();
  }

  updateNote(note: Note): Promise<Note> {
    return this.http
    .put<Note>(`${this.appService.getEnvironment().API_CONNECTION_STRING}/${note._id}/edit`, note)
    .toPromise();
  }

  deleteNode(id: string): Promise<String> {
    return this.http
    .delete<string>(`${this.appService.getEnvironment().API_CONNECTION_STRING}/${id}/delete`)
    .toPromise();
  }

}

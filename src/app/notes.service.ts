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
    .get<Note[]>('/notes')
    .toPromise();
  }

  createNote(note: Note): Promise<Note> {
    return this.http
    .post<Note>(`/notes`, note)
    .toPromise();
  }

  updateNote(note: Note): Promise<Note> {
    return this.http
    .put<Note>(`/notes/${note._id}/edit`, note)
    .toPromise();
  }

  deleteNode(id: string): Promise<String> {
    return this.http
    .delete<string>(`/notes/${id}/delete`)
    .toPromise();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(): Promise<Note[]> {
    return this.http
    .get<Note[]>(environment.notes_api)
    .toPromise();
  }

  createNote(note: Note): Promise<Note> {
    return this.http
    .post<Note>(`${environment.notes_api}`, note)
    .toPromise();
  }

  updateNote(note: Note): Promise<Note> {
    return this.http
    .put<Note>(`${environment.notes_api}${note._id}/edit`, note)
    .toPromise();
  }

  deleteNode(id: string): Promise<String> {
    return this.http
    .delete<string>(`${environment.notes_api}${id}/delete`)
    .toPromise();
  }

}

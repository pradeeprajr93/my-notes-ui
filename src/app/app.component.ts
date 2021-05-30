import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from './models/note';
import { NoteEditorCardComponent } from './note-editor-card/note-editor-card.component';
import { NotesService } from './notes.service';

export enum MODE {
  EDIT = 'EDIT', 
  CREATE = 'CREATE'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notes!: Note[];

  constructor(private notesService: NotesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getNotes();
  }

  async deleteNote(note: Note) {
    await this.notesService.deleteNode(<string>note._id);
    this.getNotes();
  }

  async getNotes(): Promise<void> {
    this.notes = await this.notesService.getNotes();
  }

  openEditor(note?: Note) {
    let mode: MODE;
    let newNote: Note = {
      color: '',
      content: '',
      title: ''
    };
    if(note) {
      mode = MODE.EDIT;
    } else {
      mode = MODE.CREATE;
      note = newNote;
    }
    const dialogRef = this.dialog.open(
      NoteEditorCardComponent,
      {
        data: {
          note,
          mode
        }
      }
    );
    dialogRef.afterClosed().subscribe(
      async (data) => {
        let result;
        console.log(data);
        if(mode === MODE.CREATE) {
          result = await this.notesService.createNote(data);
        } else if(mode === MODE.EDIT) {
          result = await this.notesService.updateNote(data);
        }
        this.getNotes();
      }
    )
  }

}

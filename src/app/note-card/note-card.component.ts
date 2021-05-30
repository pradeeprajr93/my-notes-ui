import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  @Input()
  note!: any;

  @Output()
  edit: EventEmitter<Note> = new EventEmitter();

  @Output()
  delete: EventEmitter<Note> = new EventEmitter();

  onEdit() {
    this.edit.emit(this.note);
  }

  onDelete() {
    this.delete.emit(this.note);
  }

}

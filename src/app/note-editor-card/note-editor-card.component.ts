import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-editor-card',
  templateUrl: './note-editor-card.component.html',
  styleUrls: ['./note-editor-card.component.scss']
})
export class NoteEditorCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoteEditorCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose() {
    this.dialogRef.close();
  }

}

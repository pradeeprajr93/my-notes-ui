import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notes!: any[];

  constructor(private notesService: NotesService) {
  }

  async ngOnInit(): Promise<void> {
    this.notes = await this.notesService.getNotes();
    console.log(this.notes);
  }

}

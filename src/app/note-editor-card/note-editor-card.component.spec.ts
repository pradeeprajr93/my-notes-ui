import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditorCardComponent } from './note-editor-card.component';

describe('NoteEditorCardComponent', () => {
  let component: NoteEditorCardComponent;
  let fixture: ComponentFixture<NoteEditorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEditorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

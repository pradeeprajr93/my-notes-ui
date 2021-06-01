import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteEditorCardComponent } from './note-editor-card/note-editor-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AppService } from './app.service';

export function init_app(appService: AppService) {
  return () => {};
}

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NoteEditorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgxMasonryModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      multi: true,
      deps: [AppService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { todoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClickOutsideModule
  ],
  providers: [todoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

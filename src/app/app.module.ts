import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BackendService } from './services/backend.service';
import { NoteService } from './services/note.service';
import { DateService } from './services/date.service';
import { ColorService } from './services/color.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UnfinishedTasksComponent } from './layout/unfinished-tasks/unfinished-tasks.component';
import { FinishedTasksComponent } from './layout/finished-tasks/finished-tasks.component';
import { NoteComponent } from './layout/note/note.component';
import { DetailComponent } from './layout/detail/detail.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteComponent,
    UnfinishedTasksComponent,
    FinishedTasksComponent,
    DetailComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {path: '', component: NoteComponent},
      {path: 'task', component: NoteComponent},
      {path: 'finished_tasks', component: FinishedTasksComponent},
      {path: 'unfinished_tasks', component: UnfinishedTasksComponent},
      {path: 'unfinished_tasks/:id', component: DetailComponent},
      {path: 'page-not-found', component: NotFoundPageComponent},
      {path: '**', redirectTo: '/'}
    ])
  ],
  providers: [BackendService, NoteService, DateService, ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

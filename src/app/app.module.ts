import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UnfinishedTasksComponent } from './layout/unfinished-tasks/unfinished-tasks.component';
import { FinishedTasksComponent } from './layout/finished-tasks/finished-tasks.component';
import { NoteComponent } from './layout/note/note.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './layout/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteComponent,
    UnfinishedTasksComponent,
    FinishedTasksComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    RouterModule.forRoot ([
      {path: '', component: UnfinishedTasksComponent},
      {path: 'finished_tasks', component: FinishedTasksComponent},
      {path: 'unfinished_tasks', component: UnfinishedTasksComponent},
      {path: 'unfinished_tasks/:id', component: EditComponent},
      {path: '**', redirectTo: '/'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

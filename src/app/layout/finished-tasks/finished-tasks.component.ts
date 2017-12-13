import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-finished-tasks',
  templateUrl: './finished-tasks.component.html',
  styleUrls: ['./finished-tasks.component.css']
})
export class FinishedTasksComponent {

  constructor(private note_ser: NoteService, private color: ColorService) { }
}

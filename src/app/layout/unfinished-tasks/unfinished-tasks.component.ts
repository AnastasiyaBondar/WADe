import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-unfinished-tasks',
  templateUrl: './unfinished-tasks.component.html',
  styleUrls: ['./unfinished-tasks.component.css']
})
export class UnfinishedTasksComponent {

  constructor(private note_ser: NoteService, private color: ColorService) { }
}

import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: Model.Note;

  constructor(private note_ser: NoteService, private correct_date: DateService) {}

  ngOnInit() {
    this.note = this.getNote(null);
  }

  getNote(paramId: string | null): Model.Note {
    return {
      id: 0,
      task: '',
      description: '',
      date: this.correct_date.readDate(),
      priority: 'Низкий'
    };
  }

  priorityChange(event) {
    const selectedIndex = event.srcElement.selectedIndex;

    switch (selectedIndex) {
      case 0: this.note.priority = 'Низкий';
      break;
      case 1: this.note.priority = 'Средний';
      break;
      case 2: this.note.priority = 'Высокий';
    }
  }
}

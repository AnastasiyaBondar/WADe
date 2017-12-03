import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: Model.Note[] = [];

  task: string = 'Task1';
  description: string = 'Description1';
  date: Date = new Date();
  priority: string = 'Низкий';

  constructor() {}
  ngOnInit() {}

  Data() {
    this.notes.push({
      id: 1,
      task: this.task,
      description: this.description,
      date: this.date,
      priority: this.priority
    });
    console.log(this.notes);
  }

  priorityChange(event) {
    const selectedIndex = event.srcElement.selectedIndex;

    switch (selectedIndex) {
      case 0: this.priority = 'Низкий';
      break;
      case 1: this.priority = 'Средний';
      break;
      case 2: this.priority = 'Высокий';
    }

    console.log(event);
    console.log(selectedIndex);
    console.log(this.priority);
  }
}

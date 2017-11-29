import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: Model.Note[];

  constructor() {
    this.notes = [
{
    id: 1,
    task: 'Сделать лабораторную по вебу',
    description: 'Лабораторная работа №3. Сделать отчет и отправить преподавателю.',
    date: new Date(2017, 9, 31),
    priority: 'Высокий'
},
{
  id: 2,
  task: 'Съездить на Барабашово',
  description: '',
  date: new Date(2017, 10, 5),
  priority: 'Средний'
},
{
  id: 3,
  task: 'Съездить на вокзал',
  description: 'Купить билеты домой.',
  date: new Date(2017, 10, 7),
  priority: 'Высокий'
}
];
}

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './backend.service';
import * as _ from 'lodash';

@Injectable()
export class NoteService {

    notes: Model.Note[]; // невыполненные задачи
    completed: Model.Note[] = []; // выполненные задачи
    i = 3; // id каждой задачи

    constructor(private router: Router, private backend: BackendService) {
        this.backend.getNoteList().subscribe((data: Model.Note[]) => {
            this.notes = this.notes || data;
        });
    }

    save(note: Model.Note) {
        note.id = this.i++;
        this.notes.push(note);
        this.router.navigate(['/unfinished_tasks']);
    }

    change(name: string) {
        for (let a = 0; a < this.notes.length; a++) {
            if (this.notes[a].task === name) {
                this.completed.push(this.notes[a]);
                this.notes.splice(a, 1);
            }
        }
    }

    getById(taskId: number) {
        return _.find(this.notes, (n: Model.Note) => n.id === taskId);
    }
}

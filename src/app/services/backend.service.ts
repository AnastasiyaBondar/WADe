import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
    constructor(private http: HttpClient) { }

    public getNoteList():  Observable<Model.Note[]> {
        return this.http.get('../../assets/note-list.json').map(data  => {
            return data as Array<Model.Note>;
        });
    }
}

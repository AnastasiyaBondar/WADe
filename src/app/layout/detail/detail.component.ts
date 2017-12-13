import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnDestroy {

  routeSubscription: Subscription;
  task: Object;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private note_ser: NoteService) {
    this.routeSubscription = activateRoute.params.subscribe((pars) => this.task = this.getTask(+pars['id']));
  }

  getTask(id: number): Object {

    const a = this.note_ser.getById(id);

    if (a) {
      return a;
    }

    this.router.navigate(['/page-not-found']);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}

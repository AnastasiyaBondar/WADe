import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute .params .subscribe((pars) => this.id = +pars['id']);
}
    ngOnDestroy() {
    this.routeSubscription.unsubscribe();
}
  ngOnInit() {
  }

}

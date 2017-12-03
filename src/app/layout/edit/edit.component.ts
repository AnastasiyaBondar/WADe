import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  id: number;

  // tasks = [
  //   {
  //     id: 1,
  //     name: 'borsh',
  //     description: 'Prigotovit'
  //   },
  //   {
  //     id: 1,
  //     name: 'borsh',
  //     description: 'Prigotovit'
  //   },
  //   {
  //     id: 1,
  //     name: 'borsh',
  //     description: 'Prigotovit'
  //   }
  // ]

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.routeSubscription = activateRoute .params .subscribe((pars) => this.id = +pars['id']);
}
    ngOnDestroy() {
    this.routeSubscription.unsubscribe();
}
// getArticle(id: number): Object {
//   for (let i = 0; i < this.task.length; i++) {
//     if (this.articles[i].id === id) {
//       return this.articles[i];
//     }
//   }
//   this.router.navigate(['/page-not-found']);
// }
  ngOnInit() {
  }
}

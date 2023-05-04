import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  page : string = '';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      this.page = (evts.urlAfterRedirects as string).split('/')[1] as string;
    })
  }


  protected readonly ontoggle = ontoggle;

  onToggleSidNav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose($event: any, sidenav: MatSidenav) {
    if($event === true){
      sidenav.close();
    }
  }
}

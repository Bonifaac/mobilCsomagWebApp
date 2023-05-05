import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "./shared/services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  page : string = '';
  title: 'projekt';
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private auth: AuthService) {

  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      this.page = (evts.urlAfterRedirects as string).split('/')[1] as string;
    });

    this.auth.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
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

  logOut(_?: boolean) {
    this.auth.logOut().then(()=>{
      console.log('Logged out successfully');
    }).catch(error => {
      console.error(error);
    });
  }
}

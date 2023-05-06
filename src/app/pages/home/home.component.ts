import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {Users} from "../../shared/models/Users";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private userS: UserService) {
  }
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }

}

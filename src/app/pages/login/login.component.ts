import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoadingService} from "../../shared/services/loading.service";
import {AuthService} from "../../shared/services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isLoading: boolean = false;

  email  = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loading: LoadingService, private authServices : AuthService) {
  }
  login() {
    this.isLoading = true;
    this.authServices.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.isLoading = false;
      this.router.navigateByUrl('/home');
    }).catch(error => {
      console.error(error);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
  }
}

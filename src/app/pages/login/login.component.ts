import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {LoadingService} from "../../shared/services/loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading: boolean = false;

  userName = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loading: LoadingService) {
  }
  login() {
    this.isLoading = true;
    this.loading.loadingWithPromise().then((data: number)=>{
      if(data === 3){
        if(this.userName.value === 'Username' && this.password.value === '1234'){
          this.router.navigateByUrl('/home');
        } else{
          console.error('Incorrect username or password');
        }
      }
    }).catch(error=>{
      console.error(error);
      this.isLoading = false;
    }).finally(()=>{
      console.log('This is executeed finally.');
      this.isLoading = false;
    });

  }
}

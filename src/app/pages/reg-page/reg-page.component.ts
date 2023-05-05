import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {User} from "../../shared/models/User";
import {LoadingService} from "../../shared/services/loading.service";
import {AuthService} from "../../shared/services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.scss']
})
export class RegPageComponent implements OnInit{

  isLoading: boolean = false;

  regForm = this.createForm({
    email: '',
    userName: '',
    password: '',
    rePassword: '',
    name: ''
  });

  constructor(private location : Location, private fb: FormBuilder, private loading: LoadingService, private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.authService.signUp(<string>this.regForm.get('email')?.value, <string>this.regForm.get('password')?.value).then(cred=> {
      console.log(cred);
      this.router.navigateByUrl("/successReg");
    }).catch(error => {
      console.error(error)
    });

  }

  createForm(model: User){
    let formGroup = this.fb.group(model);
    formGroup.get('userName')?.addValidators([Validators.required]);
    formGroup.get('email')?.addValidators([Validators.required, Validators.email]);
    formGroup.get('password')?.addValidators([Validators.required]);
    formGroup.get('repassword')?.addValidators([Validators.required]);
    formGroup.get('name')?.addValidators([Validators.required]);

    return this.fb.group(model);
  }

  goBack(){
    this.location.back();
  }

  signUp() {
    this.isLoading = true;
    this.loading.loadingWithPromise().then((data: number)=>{
      //valami
    }).catch(error=>{
      console.error(error);
      this.isLoading = false;
    }).finally(()=>{
      console.log('This is executeed finally.');
      this.isLoading = false;
      this.router.navigateByUrl("/successReg");
    });

  }
}

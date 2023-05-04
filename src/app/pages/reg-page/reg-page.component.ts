import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {User} from "../../shared/models/User";
import {LoadingService} from "../../shared/services/loading.service";


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

  constructor(private location : Location, private fb: FormBuilder, private loading: LoadingService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.regForm.valid){
      if(this.regForm.get('userName') && this.regForm.get('email') &&
        this.regForm.get('password') && this.regForm.get('rePassword') && this.regForm.get('name')
      ){
        console.log('valid');
      }
    }
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

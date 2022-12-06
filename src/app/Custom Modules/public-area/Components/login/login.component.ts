import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../../Common/Services/authentication.service';
import { LoadingService } from '../../../../Common/Services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;  
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService,public loadingService: LoadingService,) { }

  ngOnInit(): void {
    this.loadingService.IsLoading=true;
    this.authenticationService.isLoggedIn();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loadingService.IsLoading=true;
    this.authenticationService.login(this.loginForm.value);
        
           
   }
}

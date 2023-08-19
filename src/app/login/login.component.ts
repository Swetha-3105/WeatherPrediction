import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators, FormArray} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showErrorMessage = false;
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]), 
  });
  constructor(private _snackBar: MatSnackBar,private router:Router,private _formBuilder: FormBuilder){ }
 
  
  ngOnInit(): void {
      
  }
  hide=true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required,Validators.maxLength(9)]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit(): void {
    // display some fireworks
      
    if (!this.email || !this.password) {
      this.showErrorMessage = true;
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/'])
    }
  }
}

  


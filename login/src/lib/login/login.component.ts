import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService, LocalService } from '@easy/api';
import { HeaderComponent } from '@easy/header';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControlState,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'easy-login',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailinput: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiservice: ApiService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      motdepasse: [null],
    });
  }

  onSubmitForm() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.motdepasse);
    this.apiservice
      .getAll(this.loginForm.value.email, this.loginForm.value.motdepasse)
      .pipe(take(1))
      .subscribe(
        (results) => {
          console.log('exito');
          //console.log('Data is received - Result - ', success);
          console.log(results.email);
          if (results.email === this.loginForm.value.email) {
            console.log(results.id);
            this.emailinput = true;
            this.router.navigateByUrl('reservation');
          }
        },
        (error) => {
          this.router.navigateByUrl('login');
        }
      );
  }
}

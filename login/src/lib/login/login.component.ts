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
  Validators,
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
    private apiservice: ApiService,
    private localStore: LocalService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      motdepasse: [null],
    });
  }

  onSubmitForm() {
    this.apiservice
      .authentifierClient(this.loginForm.value.email, this.loginForm.value.motdepasse)
      .pipe(take(1))
      .subscribe(
        (results) => {
          if (results.email === this.loginForm.value.email) {
            this.emailinput = true;
            this.localStore.saveData('clientid', results.id.toString());
            this.router.navigateByUrl('reservation');
          }
        },
        (error) => {
          this.router.navigateByUrl('login');
        }
      );
  }
}

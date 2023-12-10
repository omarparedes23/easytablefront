import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@easy/header';
import { Observable, take } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, Iclient, LocalService } from '@easy/api';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'easy-signup',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private apiservice: ApiService,
    private router: Router,
    private localStore: LocalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      motDePasse: [null],
      codePostal: [null],
      email: [null],
      nom: [null],
      prenom: [null],
      rue: [null],
      telephone: [null],
      ville: [null],
    });
  }

  onSubmitForm() {
    //this.reservationForm.value.clientId = this.clientid?.toString();
    this.apiservice
      .enregistrerClient(this.signupForm)
      .pipe(take(1))
      .subscribe(
        (data) => {
          console.log(data);
          this.localStore.saveData('clientid', data.id);
          this.router.navigateByUrl('reservation');
        },
        (error) => {
          console.log(error);
          this.router.navigateByUrl('signup');
        }
      );
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public formLogin : FormGroup = new FormGroup({})

  constructor(private loginService : LoginService, private formBuilder: FormBuilder) {
    // TODO : Sécuriser les champs
    this.formLogin = this.formBuilder.group({
      login: ['0605040302', Validators.required],
      pwd : ['azerty', Validators.required]
    });
  }

  public log() {
    this.loginService.login(this.formLogin.controls["login"].value, this.formLogin.controls["pwd"].value).subscribe((data : any) => {
      console.log("success!")
      console.log(data)
    });
  }

}

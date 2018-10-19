import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  doLogin(loginData: any) {
    console.log(loginData);
    this.http
      .post('http://localhost:8080/api/authenticate', {'username': 'admin', 'password': 'admin'})
      .subscribe( data => {
        console.log('token', data);
      });
  }

}

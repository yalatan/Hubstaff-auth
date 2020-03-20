import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 path: string;

  constructor() {}

  ngOnInit() {
    const myParams1 = {
      client_id: environment.client_id,
      response_type: environment.response_types_supported,
      nonce:
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15),
      redirect_uri: environment.redirect_uri,
      scope: environment.scopes_supported
    };

    this.path =
      environment.authorization_endpoint +
      '?' +
      Object.keys(myParams1)
        .reduce((acc: URLSearchParams, curr: string) => {
          acc.append(curr, myParams1[curr]);
          return acc;
        }, new URLSearchParams())
        .toString();
  }
}

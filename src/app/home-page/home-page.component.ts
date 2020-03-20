import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
currentUser: any;
code: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data =>{
      this.code = data.code;
    });
  }
  try() {
    const params = new URLSearchParams();
    params.append('grant_type', environment.grant_types_supported[0]);
    params.append('code', this.code);
    params.append('redirect_uri', environment.redirect_uri);

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret)
    });
    const httpOptions = {headers, params: new HttpParams({
      fromObject: {
        grant_type: environment.grant_types_supported[0],
        code: this.code,
        redirect_uri: environment.redirect_uri
      }
    })};

    this.http.post(environment.token_endpoint, {}, httpOptions).subscribe( data => {
  this.currentUser = data;
  console.log('this.currentUser', this.currentUser);
  if (data) {
  const headers2 = new HttpHeaders({
    Authorization: this.currentUser.token_type + ' ' + this.currentUser.access_token
  });
  this.http.get(`https://api.hubstaff.com/v2/organizations`, {headers: headers2}).subscribe( res =>{
    console.log('res', res);
  });
}
});
  }

  

}

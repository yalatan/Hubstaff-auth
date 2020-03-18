import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
code: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data =>{
      
      this.code = data.code;
      console.log('this.route.queryParams', this.code);
    });
  }
  try(){
const httpOptions = {
  headers: new HttpHeaders({
    // grant_type: environment.grant_types_supported[0],
     client_id: environment.client_id,
    // Authorization: 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret),
    Authorization: 'Basic ' + environment.client_id + ':' + environment.client_secret
  })
};

const body = {
  authorization: 'Basic ' + environment.client_id + ':' + environment.client_secret,
  grant_type: 'authorization_code',
  code: this.code,
  redirect_uri: environment.redirect_uri,
  client_id: environment.client_id,
  // authorization: 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret),
  
  // 'Authorization header': 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret)
};
console.log('boby', body)
this.http.post(environment.token_endpoint, body).subscribe( data => {
  console.log('this.http.get(this.Url, httpOptions)', data)
});
  }

}

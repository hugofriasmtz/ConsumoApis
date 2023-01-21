import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Company } from './app.company';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumoApis';

  Company: Company = new Company;
  capsule: any[]= [];

  constructor(
    private http:HttpClient
    ){};

    ngOnInit(){
      this.http.get('https://api.spacexdata.com/v4/capsules').subscribe(( capsule:any )=>{
        this.capsule = capsule;
      })

      this.getCompany();
    }

    getCompany(){
      this.http.get('https://api.spacexdata.com/v4/company').subscribe(( data:any )=>{
        this.Company = data;
      });
    }


}

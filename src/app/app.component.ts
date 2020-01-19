import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HomeserviceService} from './homeservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public jsonData;
  constructor(private http: HttpClient, public homeservice:HomeserviceService){
    //this.dataList = this.homeservice.demoData;
  }
  i=0;
  time = 15;
  dataList;
  timer ;

  beginTimer(){
    
   this.timer = setInterval(()=>{

      this.dataList = this.homeservice.demoData.slice(this.i, this.i + 1);

      this.time = this.time - 1; this.i = this.i + 1;

      if (this.time == 4){ this.stopTimer();};

    }, 900);
  
  }

  stopTimer(){
    clearInterval(this.timer);
    this.time = 15;
  }

  saveJsonData(data){
    //this.homeservice.serviceData = data;
    console.log(data);
  }

  ngOnInit(){
    //this.http.get("http://jsonplaceholder.typicode.com/users")
    //.subscribe(article => this.saveJsonData(article));
  }
}

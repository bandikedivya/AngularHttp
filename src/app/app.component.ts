import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularHttp';

  
  apiurl = "https://jsonplaceholder.typicode.com/comments";
  data:any  = []; 

  constructor(private httpclient : HttpClient){

  }

  // used ngonintit to subscribe and to initialize
  ngOnInit(): void {

    let endpoint  = this.httpclient.get(this.apiurl);
    endpoint.subscribe((result:any)=>{
      console.log("The collection of info", result);
      this.data = result; 

    })

    // this.httpclient.get("https://jsonplaceholder.typicode.com/todos")
    //                 .subscribe((data)=>{
    //                   console.log("Data Collection is: ", data);
    //                 })
                    
    
  }
}

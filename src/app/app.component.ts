import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttp';

  apiurl = 'https://jsonplaceholder.typicode.com/comments';
  data: any = [];

  myEndPoint = 'http://localhost:3000/Mobile';

  constructor(private httpclient: HttpClient) {}

  // used ngonintit to subscribe and to initialize
  ngOnInit(): void {
    // let endpoint  = this.httpclient.get(this.apiurl);
    // endpoint.subscribe((result:any)=>{
    //   console.log("The collection of info", result);
    //   this.data = result;

    // })

    // this.httpclient.get("https://jsonplaceholder.typicode.com/todos")
    //                 .subscribe((data)=>{
    //                   console.log("Data Collection is: ", data);
    //                 })

    let myOtherEndPoint = this.httpclient
      .get(this.myEndPoint)
      .subscribe((result1) => {
        console.log(result1);
      });
  }

  evtCreateNewTV() {
    let newTV = {
      id: '4', // textbox
      brand: 'LG', // dropdown
      location: 'Dhone', //textbox
    };

    //post is used to insert the new value to the endpoint

    this.httpclient
      .post('http://localhost:3000/Tv', newTV)
      .subscribe((result2) => {
        console.log('New tv has inserted via post method');
        console.log(result2);
      });
  }

  gettv: any = "";
  findbyid(id: any) {
    // let tv = "http://localhost:3000/Tv/2";
    // this.httpclient.get(tv).subscribe((gettv)=>{
    //   console.log(gettv);
    // });


    let tv = `http://localhost:3000/Tv/${id}`;
    this.httpclient.get(tv).subscribe((gettv)=>{
      console.log(gettv);
    });
  }

  updatetvdata(id: any){
    let tv = `http://localhost:3000/Tv/${id}`;
    let body = {
      title: 'Television',
      location: 'Russia',
      Price: 2000000,
    };
    //put is used to update the existing data
    this.httpclient.put(tv, body).subscribe((notification) => {
      console.log(notification);
    });
  }

    PatchTV(id: any) {
    let tv = `http://localhost:3000/Tv/${id}`;
    let body = {
      location: 'delhi',
    };
    this.httpclient.patch(tv, body).subscribe((notification1) => {
      console.log(notification1);
    });
  }
    DeleteTv(id: any) {
    let tv = `http://localhost:3000/Tv/${id}`;
   
    this.httpclient.delete(tv).subscribe((notification2) => {
      console.log(notification2);
    });
  }
}

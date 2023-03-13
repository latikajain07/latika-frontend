import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
     
     state:any;   

    constructor(private http:HttpClient)
      {}

    ngOnInit() {
       let response = this.http.get("http://localhost:8080/getdata");
        response.subscribe((data)=>this.state=data);


    }



}

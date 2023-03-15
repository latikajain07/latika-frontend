import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
     
     state:any;  
     roles:any;
    deps:any;
    stateid:any;
     public countryDetails ={
      c_Name:'',
      c_Short_Name:'',
     }; 

    constructor(private http:HttpClient,private userService: UserService)
      {}

    ngOnInit() {
       let response = this.http.get("http://localhost:8080/getcountrydata");
        response.subscribe((data)=>this.state=data);
       
       
      
    }
    
}

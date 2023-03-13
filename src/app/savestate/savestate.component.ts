import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savestate',
  templateUrl: './savestate.component.html',
  styleUrls: ['./savestate.component.css']
})
export class SavestateComponent implements OnInit {

  constructor(){}
public user ={
  c_Name : '' ,
  c_Short_Name : ''
  
};

  ngOnInit() {
    
  }

}

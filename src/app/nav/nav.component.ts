import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IUser } from '../interfaces/User';
import { Output, EventEmitter } from '@angular/core';
import { IPost } from '../interfaces/Post';
@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    myUsers:IUser[] |undefined;
    selectedIndex: number | undefined;
    @Output() newItemEvent = new EventEmitter<IPost[]>();
    @Output() newUserNameEvent = new EventEmitter<string>();
  constructor(private _http:HttpService){

  }

  ngOnInit(): void {
    
    this.fetchallUsers()
  }

  fetchallUsers(){
    this._http.getAllUsers().subscribe((resp:IUser[])=>{
      this.myUsers=resp; 
      console.log(resp);
       
    })
  }

  getuserById(value: number,index:number,name:string) {
    this._http.getUser(value).subscribe((resp:IPost[])=>{
      
      this.newItemEvent.emit(resp);
      this.selectedIndex = index;
      this.getUserName(name)
    })
  }

  getUserName(value:string){
    this.newUserNameEvent.emit(value);
  }

}

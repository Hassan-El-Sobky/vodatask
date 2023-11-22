import { Component } from '@angular/core';
import { IUser } from './interfaces/User';
import { IPost } from './interfaces/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voda';
  userPosts:IPost[]|undefined;
  userName:string|undefined;
  getUserData(eventData:IPost[]){
      // console.log(eventData);
      this.userPosts=eventData
      
  }
  getuserName(event:string){
     this.userName=event
     
  }
}

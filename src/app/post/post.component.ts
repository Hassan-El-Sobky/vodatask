import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces/Post';
import { HttpService } from '../services/http.service';
import { IComment } from '../interfaces/Comment';
import { StateService } from '../services/state.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() posts:IPost[] |undefined
  @Input() userName:string |undefined
   postComments:IComment[]|undefined;
   popupState:boolean|undefined;
   userImg:string='./assets/images/user.png';
  constructor(
    private _http:HttpService,
    private _state:StateService
    
    ){}

    ngOnInit(): void {
      this._state.popupState.subscribe(show=>this.popupState=show)
      
      
    }

  viewComments(id:number){
    this._http.getPostComment(id).subscribe((resp:IComment[])=>{
          this._state.showPopup();
          this.postComments=resp;
    })
  }

}

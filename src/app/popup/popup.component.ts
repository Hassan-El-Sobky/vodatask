import { Component,Input,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { IComment } from '../interfaces/Comment';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit , OnChanges {

  @Input() comments:IComment[]|undefined;

  constructor(private _state:StateService){

  }
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  closeModal(){
    this._state.hidePopup();
  }
}

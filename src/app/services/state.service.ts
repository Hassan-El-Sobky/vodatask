import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _popupState = new BehaviorSubject<boolean>(false);
  constructor() { }

  get popupState() {
    return this._popupState.asObservable();
  }

  showPopup() {
    this._popupState.next(true);
  }

  hidePopup() {
    this._popupState.next(false);
  }


}

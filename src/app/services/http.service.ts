import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';
import { enviroment as env } from 'src/environments/environment';
import { IPost } from '../interfaces/Post';
import { IComment } from '../interfaces/Comment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _httpClient:HttpClient) {

   }

   getAllUsers():Observable<IUser[]>{
      return this._httpClient.get<IUser[]>(`${env.apiURL}/users`)
   }
   getUser(id:number):Observable<IPost[]>{
    let params = new HttpParams().set('userId', id);
    return this._httpClient.get<IPost[]>(`${env.apiURL}/posts`,{params})
   }
   
   getPostComment(id:number):Observable<IComment[]>{
    let params = new HttpParams().set('postId', id);
    return this._httpClient.get<IComment[]>(`${env.apiURL}/comments`,{params})
   }


}

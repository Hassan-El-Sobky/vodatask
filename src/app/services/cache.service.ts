import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
 private cache :Map<string,any>=new Map();
  constructor() { }

  saveCache(url:string,respone:any){
     this.cache.set(url,respone);
  }

  get(url:string){
    return this.cache.get(url);
  }

  clear(){
    this.cache.clear();
  }
 
}


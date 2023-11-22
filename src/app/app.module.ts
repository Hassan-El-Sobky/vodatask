import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PopupComponent } from './popup/popup.component'
import { HttpcacheInterceptor } from './http-interceptors/httpcache.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpcacheInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

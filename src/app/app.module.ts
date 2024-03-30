import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiConnectComponent } from './api-connect/api-connect.component';
import { LoginComponent } from './login/login.component';

import { ChatComponent } from './chat/chat.component'; //chat
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'; //chat
// const config: SocketIoConfig = { url: 'https://chat-server.ysojs.se', options: {} }; //chat
const config: SocketIoConfig = { url: 'http://localhost:3005', options: {} }; //chat

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'api', component: ApiConnectComponent},
  { path: 'chat', component: ChatComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormComponent,
    ApiConnectComponent,
    LoginComponent,
    ChatComponent //chat
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    { enableTracing: true }
    ),
    BrowserModule, //chat
    SocketIoModule.forRoot(config) //chat
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NetworksComponent } from './networks/networks.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InstancesComponent } from './instances/instances.component';
import { RoutingComponent } from './routing.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component'
import { TokenInterceptorService } from './token-interceptor.service';
import { UsersComponent } from './users/users.component';
import { AccountFilterPipe } from './account-filter.pipe';

//import { InstanceFilterPipe } from './instance-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NetworksComponent,
    AccountsComponent,
    InstancesComponent,
    RoutingComponent,
    LoginComponent,
    UsersComponent,
    AccountFilterPipe,
    //InstanceFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';

import { AdalService, AdalGuard } from 'adal-angular4';
import { AuthGuard } from './guards/auth-guards';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaLogadaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

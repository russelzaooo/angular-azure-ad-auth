import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { AdalService, AdalGuard } from 'adal-angular4';
import { AuthGuard } from './guards/auth-guards';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: 'area-logada', component: AreaLogadaComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/area-logada',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdalService, AdalGuard]
})
export class AppRoutingModule { }

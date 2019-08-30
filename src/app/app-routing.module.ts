import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'info', component: InfoComponent },
  { path: 'countdown', component: CountdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

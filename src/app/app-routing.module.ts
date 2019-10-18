import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ButtonDemoComponent} from './demo/button/button.component';



const routes: Routes = [
  { path: '', component: ButtonDemoComponent,
    children: [
      { path: 'buttons', component: ButtonDemoComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

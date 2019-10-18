import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ButtonDemoComponent} from './demo/button/button.component';
import {InputComponent} from './demo/input/input.component';


const routes: Routes = [
    {path: 'buttons', component: ButtonDemoComponent},
    {path: 'input', component: InputComponent},
    {path: '', redirectTo: 'buttons', pathMatch: 'full'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

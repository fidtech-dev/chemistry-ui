import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ButtonDemoComponent} from './demo/button/button.component';
import {InputComponent} from './demo/input/input.component';
import {CheckboxComponent} from './demo/checkbox/checkbox.component';
import {GetStartedComponent} from './demo/get-started/get-started.component';


const routes: Routes = [
    {path: 'getStarted', component: GetStartedComponent},
    {path: 'buttons', component: ButtonDemoComponent},
    {path: 'input', component: InputComponent},
    {path: 'checkbox', component: CheckboxComponent},

    {path: '', redirectTo: 'getStarted', pathMatch: 'full'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ButtonComponent} from './demo/button/button.component';
import {InputComponent} from './demo/input/input.component';
import {CheckboxComponent} from './demo/checkbox/checkbox.component';
import {GetStartedComponent} from './demo/get-started/get-started.component';
import {IconComponent} from './demo/icon/icon.component';
import {RadioButtonComponent} from './demo/radio-button/radio-button.component';


const routes: Routes = [
    {path: 'getStarted', component: GetStartedComponent},
    {path: 'buttons', component: ButtonComponent},
    {path: 'input', component: InputComponent},
    {path: 'checkbox', component: CheckboxComponent},
    {path: 'icon', component: IconComponent},
    {path: 'radioButton', component: RadioButtonComponent},
    {path: '', redirectTo: 'getStarted', pathMatch: 'full'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

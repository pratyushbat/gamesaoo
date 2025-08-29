import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/layout/dashboard.component';
import {UsersComponent} from './containers/users.component';
import {PostComponent} from './containers/post.component';
import {ViewUserComponent} from './containers/view-user.component';
import { AddItemComponent } from './components/add-item-component';
import { CounterComponent } from './components/counter/couter.component';
import { CodersneverquitComponent } from './components/coders-never-quit/codersneverquit.component';


const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {path: '', component: UsersComponent},
    {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule)},
    {path: 'user/:id', component: ViewUserComponent},
    {path: 'post', component: PostComponent},
    {path: 'add-item', component: AddItemComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'codersneverquit', component: CodersneverquitComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

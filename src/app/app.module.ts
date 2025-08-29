import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './containers/users.component';
import {PostComponent} from './containers/post.component';
import {DashboardComponent} from './components/layout/dashboard.component';
import {HeaderComponent} from './components/layout/header.component';
import {LayoutComponent} from './components/layout/youtube-layout.component';
import {MaterialModule} from './material.module';
import {HttpService} from './services/http.service';
import {ApiService} from './services/api.service';
import {UserCardComponent} from './components/user-card.component';
import {UserListComponent} from './components/user-list.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './reducers';
import {YoutubeRepository} from './services/youtube-repository';
import {ErrorComponent} from './components/error.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {UpdateUserComponent} from './components/update-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ViewUserComponent} from './containers/view-user.component';
import {PostListComponent} from './components/post-list.component';
import {PostCardComponent} from './components/post-card.component';
import { AddItemComponent } from './components/add-item-component';
import { CounterButtonComponent } from './components/counter/couter-button.component';
import { CounterOutputComponent } from './components/counter/couter-output.component';
import { CounterComponent } from './components/counter/couter.component';
import { GroceryComponent } from './components/coders-never-quit/grocery.comonennt';
import { BucketComponent } from './components/coders-never-quit/bucket.component';
import { CodersneverquitComponent } from './components/coders-never-quit/codersneverquit.component';
import { EffectsModule } from '@ngrx/effects';
import { GroceryEffects } from './effects/grocery.effect';
import { GroceryService } from './services/grocery.service';
import { HighlightDirective } from './directives/highlight.directive';
import { AppInputDirective } from './directives/appinput.directive';
import { ListDirective } from './directives/list.directive';
import { EmbeddedViewDirective } from './directives/embedded-view.component';
import { AccordianDirective } from './directives/structural.directive';

import { AccordianComponent } from './components/coders-never-quit/accordian.component';
import { TabComponent } from './components/coders-never-quit/tab.component';
import { GreetComponent } from './components/coders-never-quit/greet/greet.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    UserCardComponent,
    UserListComponent,
    ErrorComponent,
    UpdateUserComponent,
    ViewUserComponent,
    PostListComponent,
    PostCardComponent,

    AddItemComponent,

    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CodersneverquitComponent,
    BucketComponent,
    GroceryComponent,
    
    HighlightDirective,
    AppInputDirective,
    ListDirective,
    EmbeddedViewDirective,
    AccordianDirective,
    TabComponent,
    AccordianComponent,
    GreetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FlexLayoutModule,
    // FlexModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([GroceryEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production,}),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HttpService, ApiService, YoutubeRepository,GroceryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

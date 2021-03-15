import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgxTypedJsComponent, NgxTypedJsModule } from 'ngx-typed-js';
import { BasicQueryComponent } from './postgres/basic-query/basic-query.component';
import { ServerDbConnectionComponent } from './postgres/server-db-connection/server-db-connection.component';
import { DbTopicsComponent } from './postgres/db-topics/db-topics.component';
import { DbQuestionsComponent } from './postgres/db-questions/db-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    BasicQueryComponent,
    ServerDbConnectionComponent,
    DbTopicsComponent,
    DbQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

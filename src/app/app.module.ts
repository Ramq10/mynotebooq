import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { JavaCoreComponent } from './java-core/java-core.component';
import { PostgresComponent } from './postgres/postgres.component';
import { AngularComponent } from './angular/angular.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JavaCoreComponent,
    PostgresComponent,
    AngularComponent,
    DataStructureComponent,
    SpringBootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

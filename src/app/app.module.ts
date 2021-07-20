import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './theme.service';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ColorPickerModule } from 'ngx-color-picker';
import { InstructionScreenComponent } from './instruction-screen/instruction-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent,
    InstructionScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    ColorPickerModule
  ],
  providers: [ ThemeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

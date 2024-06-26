import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';


import { AppComponent } from './app.component';
import { TabMainComponent } from './tabs/tab-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMainComponent,
  ],
  imports: [
    BrowserModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

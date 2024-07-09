import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { AppComponent } from './app.component';
import { TabMainComponent } from './tabs/tab-main.component';
import {GameComponent} from './components/game/game.component';
import {StoreComponent} from './components/store/store.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TabMainComponent,
    GameComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

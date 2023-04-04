import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { CardModule } from 'primeng/card';
import { CardsDriversComponent } from './components/cards-drivers/cards-drivers.component';
import { CardsScheduleComponent } from './components/cards-schedule/cards-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    HeaderComponent,
    CardsDriversComponent,
    CardsScheduleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

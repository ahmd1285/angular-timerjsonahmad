import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeserviceService } from './homeservice.service';
import { ConsumerComponent } from './consumer/consumer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ConsumerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HomeserviceService]
})
export class AppModule { }

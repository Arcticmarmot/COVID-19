import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxEchartsModule} from 'ngx-echarts';
import {StatisticModule} from './statistic/statistic.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StatisticModule,
    HttpClientModule,
    NgxEchartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

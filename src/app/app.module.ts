import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './Filter/filter.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailsComponent,
    AppComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
      HttpClientModule,
      NgxPaginationModule,
      BrowserModule,
      FormsModule,CommonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OwlModule } from 'ngx-owl-carousel';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { OutletsComponent } from './components/outlets/outlets.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProducsSlideComponent } from './components/producs-slide/producs-slide.component';
import { FaqComponent } from './components/faq/faq.component';
import { TigernutsComponent } from './components/tigernuts/tigernuts.component';
import { OrangeComponent } from './components/orange/orange.component';
import { CarrotComponent } from './components/carrot/carrot.component';
import { PineapleComponent } from './components/pineaple/pineaple.component';
import { WatermelonComponent } from './components/watermelon/watermelon.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContactsComponent,
    HomepageComponent,
    AboutComponent,
    OutletsComponent,
    ProductsComponent,
    ProducsSlideComponent,
    FaqComponent,
    TigernutsComponent,
    OrangeComponent,
    CarrotComponent,
    PineapleComponent,
    WatermelonComponent,
    TestimoniesComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

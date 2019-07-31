import { WatermelonComponent } from './components/watermelon/watermelon.component';
import { PineapleComponent } from './components/pineaple/pineaple.component';
import { CarrotComponent } from './components/carrot/carrot.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OutletsComponent } from './components/outlets/outlets.component';
import { TigernutsComponent } from './components/tigernuts/tigernuts.component';
import { OrangeComponent } from './components/orange/orange.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'outlets', component: OutletsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'tigernut', component: TigernutsComponent },
  { path: 'orange', component: OrangeComponent },
  { path: 'carrot', component: CarrotComponent },
  { path: 'pineapple', component: PineapleComponent },
  { path: 'watermelon', component: WatermelonComponent },
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    CommonModule
  ]
})
export class AppRoutingModule { }

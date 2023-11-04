import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NewComponent } from './component/new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './component/hero/hero.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactComponent } from './component/contact/contact.component';
import { AuthComponent } from './component/auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HomelandComponent } from './component/homeland/homeland.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CalComponent } from './component/cal/cal.component';
import { TestComponent } from './component/test/test.component';
import { PageComponent } from './component/dashboard/page/page.component';
import { NavComponent } from './component/dashboard/nav/nav.component';
import { ProfileComponent } from './component/dashboard/profile/profile.component';
import { CardsComponent } from './component/dashboard/cards/cards.component';
import { ContentComponent } from './component/dashboard/content/content.component';
import { CateComponent } from './component/dashboard/cate/cate.component';
import { ApmtComponent } from './component/apmt/apmt.component';
import { HomeComponent } from './component/apmt/home/home.component';
import { BsecComponent } from './component/apmt/bsec/bsec.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './component/products/products.component';
import { ProductCardComponent } from './component/products/product-card/product-card.component';
import { ProductDetailsComponent } from './component/products/product-details/product-details.component';
import { CheckoutComponent } from './component/products/checkout/checkout.component';

import { ToastrModule } from 'ngx-toastr';


const firebaseConfig = {
  // Your Firebase config here
};

const routesConfig: Routes = [
  { path: '', component: HomelandComponent },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointment', component: ApmtComponent },
  { path: 'appointment/book', component: ApmtComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'checkout/:id', component: CheckoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    HeroComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    AuthComponent,
    HomelandComponent,
    DashboardComponent,
    CalComponent,
    TestComponent,
    PageComponent,
    NavComponent,
    ProfileComponent,
    CardsComponent,
    ContentComponent,
    CateComponent,
    ApmtComponent,
    HomeComponent,
    BsecComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

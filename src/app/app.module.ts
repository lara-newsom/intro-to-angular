import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { SubSectionComponent } from './home/sub-section/sub-section.component';
import { CardComponent } from './home/sub-section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ROUTE_TOKENS } from './models/route-tokens';
import { SubHeroLogoModule } from './shared-ui/sub-hero-logo/sub-hero-logo.module';

const ROUTES: Route[] = [
  {
    path: ROUTE_TOKENS.products,
    loadChildren: () => import('./product-view/product-view.module').then(m => m.ProductViewModule),
  },
  {
    path: '',
    redirectTo: ROUTE_TOKENS.home,
    pathMatch: 'full',
  },
  {
    path: ROUTE_TOKENS.home,
    component: HomeComponent,
  },
  {
    path: ROUTE_TOKENS.contact,
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroSectionComponent,
    SubSectionComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      bindToComponentInputs: true,
    }),
    SubHeroLogoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

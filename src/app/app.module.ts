import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SubHeroLogoComponent } from './shared-ui/sub-hero-logo/sub-hero-logo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { SubSectionComponent } from './home/sub-section/sub-section.component';
import { CardComponent } from './home/sub-section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbsComponent } from './shared-ui/breadcrumbs/breadcrumbs.component';
import { ContactComponent } from './contact/contact.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SideMenuComponent } from './product-view/side-menu/side-menu.component';
import { DetailViewComponent } from './product-view/detail-view/detail-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductViewComponent,
    SideMenuComponent,
    DetailViewComponent,
    SubHeroLogoComponent,
    NotFoundComponent,
    HeroSectionComponent,
    SubSectionComponent,
    CardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

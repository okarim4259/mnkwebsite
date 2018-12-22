import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-modules/router/app-router.module';
import { TestcomponentComponent } from './components/sandbox/testcomponent/testcomponent.component';
import { HomeTestComponent } from './components/sandbox/home-test/home-test.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { DisplayComponent } from './components/MainPageDisplay/display/display.component';
import { CarouselComponent } from './components/MainPageDisplay/carousel/carousel.component';
import { DisplaycontainerComponent } from './components/MainPageDisplay/displaycontainer/displaycontainer.component';
import { ProducoffersComponent } from './components/MainPageDisplay/producoffers/producoffers.component';
import { FooterComponent } from './components/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    HomeTestComponent,
    NavbarComponent,
    DisplayComponent,
    CarouselComponent,
    DisplaycontainerComponent,
    ProducoffersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MyNavbarComponent } from './navbar-component/navbar-component';
import { MyFooterComponent } from './footer-component/footer-component';
import { MyHomePageComponent } from './home-page-component/home-page-component';
import { MyAboutPageComponent } from './about-page-component/about-page-component';
import { MyServicesPageComponent } from './services-page-component/services-page-component';
import { MyGalleryPageComponent } from './gallery-page-component/gallery-page-component';
import { MyVideoPageComponent } from './video-page-component/video-page-component';
import { MyContactPageComponent } from './contact-page-component/contact-page-component';
import { MyFaqPageComponent } from './faq-page-component/faq-page-component';
import { MyProgramPageComponent } from './program-page-component/program-page-component';
import { HttpModule } from '../../node_modules/@angular/http';
import { ProgramServices } from './services/program-services';
import { MyFormPageComponennt } from './form-page-component/form-page-component';
import { MyTestimoniesPageComponent } from './testimonies-page-component/testimonies-page-component';
import { FormService } from '../app/services/form-services';
import { SafeUrlPipe } from './pipes/safe-url.pipe';



const appRoutes: Routes = [

  {path : 'home' , component : MyHomePageComponent},
  {path : 'about' , component : MyAboutPageComponent},
  {path : 'services' , component : MyServicesPageComponent},
  {path : 'gallery' , component : MyGalleryPageComponent},
  {path : 'video' , component : MyVideoPageComponent},
  {path : 'program' , component : MyProgramPageComponent},
  {path : 'contact' , component : MyContactPageComponent},
  {path : 'form' , component : MyFormPageComponennt},
  {path : 'faq' , component : MyFaqPageComponent},
  {path : 'testimonies' , component : MyTestimoniesPageComponent},
  

];



@NgModule({
  declarations: [
    SafeUrlPipe,
    AppComponent, MyNavbarComponent, MyFooterComponent, MyHomePageComponent,
    MyAboutPageComponent, MyServicesPageComponent, MyGalleryPageComponent, MyContactPageComponent,
    MyVideoPageComponent, MyFaqPageComponent, MyProgramPageComponent, MyFormPageComponennt, MyTestimoniesPageComponent
   ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProgramServices,FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

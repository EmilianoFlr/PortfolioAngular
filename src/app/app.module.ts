import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobremiComponent,
    SkillsComponent,
    EducacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

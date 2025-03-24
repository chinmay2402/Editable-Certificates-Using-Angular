import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BirthEnglishComponent } from './Birth/birth-english/birth-english.component';
import { BirthItalianComponent } from './Birth/birth-italian/birth-italian.component';
import { DeathEnglishComponent } from './Death/death-english/death-english.component';
import { DeathItalianComponent } from './Death/death-italian/death-italian.component';
import { DivorseEnglishComponent } from './divorse/divorse-english/divorse-english.component';
import { DivorseItalianComponent } from './divorse/divorse-italian/divorse-italian.component';
import { GramaEnglishComponent } from './grama/grama-english/grama-english.component';
import { GramaItalianComponent } from './grama/grama-italian/grama-italian.component';
import { MarriageEnglishComponent } from './marriage/marriage-english/marriage-english.component';
import { MarriageItalianComponent } from './marriage/marriage-italian/marriage-italian.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdvanceItalianComponent } from './advance/advance-italian/advance-italian.component';
import { OrdinaryItalianComponent } from './ordinary/ordinary-italian/ordinary-italian.component';

import { PoliceItalianComponent } from './police/police-italian/police-italian/police-italian.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirthEnglishComponent,
    BirthItalianComponent,
    DeathEnglishComponent,
    DeathItalianComponent,
    DivorseEnglishComponent,
    DivorseItalianComponent,
    GramaEnglishComponent,
    GramaItalianComponent,
    MarriageEnglishComponent,
    OrdinaryItalianComponent,
    MarriageItalianComponent,
    AdvanceItalianComponent,
    PoliceItalianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

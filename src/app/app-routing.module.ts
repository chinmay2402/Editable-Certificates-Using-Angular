import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { OrdinaryItalianComponent } from './ordinary/ordinary-italian/ordinary-italian.component';
import { AdvanceItalianComponent } from './advance/advance-italian/advance-italian.component';
import { PoliceItalianComponent } from './police/police-italian/police-italian/police-italian.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'birth/english', component: BirthEnglishComponent },
  { path: 'birth/italian', component: BirthItalianComponent },
  { path: 'death/english', component: DeathEnglishComponent },
  { path: 'death/italian', component: DeathItalianComponent },
  { path: 'divorce/english', component: DivorseEnglishComponent },
  { path: 'divorce/italian', component: DivorseItalianComponent },
  { path: 'garma/english', component: GramaEnglishComponent },
  { path: 'garma/italian', component: GramaItalianComponent },
  { path: 'marriage/english', component: MarriageEnglishComponent },
  { path: 'marriage/italian', component: MarriageItalianComponent },
  { path: 'ordinary/italian', component: OrdinaryItalianComponent },
  { path: 'advance/italian', component: AdvanceItalianComponent },
  { path: 'police/italian', component: PoliceItalianComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

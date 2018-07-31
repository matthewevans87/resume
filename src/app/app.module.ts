import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfessionalResumeComponent } from './components/professional-resume/professional-resume.component';
import { AcademicResumeComponent } from './components/academic-resume/academic-resume.component';


const appRoutes: Routes = [
  { path: 'professional', component: ProfessionalResumeComponent },
  { path: 'academic', component: AcademicResumeComponent },
  { path: '',
    redirectTo: '/professional',
    pathMatch: 'full'
  },
  { path: '**', component: ProfessionalResumeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalResumeComponent,
    AcademicResumeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
      {useHash: true}
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

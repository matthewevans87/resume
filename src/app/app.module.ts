import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcademicResumeComponent } from './components/academic-resume/academic-resume.component';
import { AccomplishmentComponent } from './components/accomplishment/accomplishment.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CompanyComponent } from './components/company/company.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { PositionComponent } from './components/position/position.component';
import { ProfessionalResumeComponent } from './components/professional-resume/professional-resume.component';
import { ProjectComponent } from './components/project/project.component';
import { ResponsibilityComponent } from './components/responsibility/responsibility.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TermComponent } from './components/term/term.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AdditionalExperienceComponent } from './components/additional-experience/additional-experience.component';


const appRoutes: Routes = [
    { path: 'professional', component: ProfessionalResumeComponent },
    {
        path: '',
        redirectTo: '/professional',
        pathMatch: 'full'
    },
    { path: '**', component: ProfessionalResumeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ProfessionalResumeComponent,
        AcademicResumeComponent,
        TermComponent,
        TechnologyComponent,
        AccomplishmentComponent,
        ProjectComponent,
        TestimonialComponent,
        PositionComponent,
        CompanyComponent,
        InstitutionComponent,
        CertificateComponent,
        ResponsibilityComponent,
        AdditionalExperienceComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
            { useHash: true }
        ),
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './demos/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './demos/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './demos/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './demos/home-demo-four/home-demo-four.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './pages/service-details-page/service-details-page.component';
import { CaseStudiesPageComponent } from './pages/case-studies-page/case-studies-page.component';
import { CaseStudyDetailsPageComponent } from './pages/case-study-details-page/case-study-details-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

export const routes: Routes = [
    {path: '', component: HomeDemoFourComponent}, //incio big-da
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'servicio', component: ServicesPageComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'case-studies', component: CaseStudiesPageComponent},
    {path: 'case-study-details', component: CaseStudyDetailsPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'courses', component: CoursesPageComponent},
    {path: 'course-details', component: CourseDetailsPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'event-details', component: EventDetailsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'contact-us', component: ContactPageComponent},
    
    // Here add new component
    
    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole component list
];
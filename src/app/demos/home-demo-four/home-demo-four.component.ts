import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedServicesComponent } from './featured-services/featured-services.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { WhatWeDoComponent } from '../../common/what-we-do/what-we-do.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { IndustriesComponent } from '../../common/industries/industries.component';
import { TeamComponent } from '../../common/team/team.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-home-demo-four',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, FeaturedServicesComponent, WhyChooseUsComponent, FunfactsComponent, ServicesComponent, TestimonialsComponent, IndustriesComponent, TeamComponent, CaseStudiesComponent, BlogComponent, GetStartedComponent, FooterComponent],
    templateUrl: './home-demo-four.component.html',
    styleUrl: './home-demo-four.component.scss'
})
export class HomeDemoFourComponent {}
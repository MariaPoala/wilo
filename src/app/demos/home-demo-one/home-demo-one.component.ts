import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SolutionsComponent } from '../../common/solutions/solutions.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { ServicesComponent } from '../../common/services/services.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { ScientistsComponent } from '../../common/scientists/scientists.component';

@Component({
    selector: 'app-home-demo-one',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, SolutionsComponent, AboutUsComponent, ServicesComponent, HowItWorksComponent, CaseStudiesComponent, ScientistsComponent, TestimonialsComponent, PartnerComponent, BlogComponent, GetStartedComponent, FooterComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent {}
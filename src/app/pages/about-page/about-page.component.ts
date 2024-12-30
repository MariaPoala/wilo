import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from '../../common/history/history.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { ScientistsComponent } from '../../common/scientists/scientists.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [NavbarComponent, InnerPageBannerComponent, AboutComponent, HistoryComponent, HowItWorksComponent, ScientistsComponent, TestimonialsComponent, PartnerComponent, FooterComponent],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {}
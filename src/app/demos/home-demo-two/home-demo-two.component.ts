import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BoxesComponent } from './boxes/boxes.component';
import { MissionComponent } from '../../common/mission/mission.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { ServicesComponent } from './services/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TeamComponent } from '../../common/team/team.component';
import { PartnerComponent } from '../../common/partner/partner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-home-demo-two',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, BoxesComponent, AboutUsComponent, MissionComponent, FunfactsComponent, ServicesComponent, HowItWorksComponent, TeamComponent, TestimonialsComponent, PartnerComponent, GetStartedComponent, BlogComponent, FooterComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss'
})
export class HomeDemoTwoComponent {}
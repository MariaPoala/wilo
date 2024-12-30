import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PartnerComponent } from './partner/partner.component';
import { FeaturedServicesComponent } from '../../common/featured-services/featured-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionComponent } from './mission/mission.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { CoursesComponent } from '../../common/courses/courses.component';
import { ExploreLearningComponent } from '../../common/explore-learning/explore-learning.component';
import { BootcampsComponent } from '../../common/bootcamps/bootcamps.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-home-demo-three',
    standalone: true,
    imports: [NavbarComponent, BannerComponent, PartnerComponent, FeaturedServicesComponent, AboutUsComponent, MissionComponent, FunfactsComponent, CoursesComponent, ExploreLearningComponent, BootcampsComponent, TestimonialsComponent, BlogComponent, SubscribeComponent, FooterComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent {}
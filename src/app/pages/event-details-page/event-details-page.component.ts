import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-event-details-page',
    standalone: true,
    imports: [RouterLink, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './event-details-page.component.html',
    styleUrl: './event-details-page.component.scss'
})
export class EventDetailsPageComponent {}
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, NavbarComponent, InnerPageBannerComponent, GetStartedComponent, FooterComponent],
    templateUrl: './services-page.component.html',
    styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {

    singleSolutionsBox = [
        {
            icon: 'flaticon-rocket',
            title: 'Startup Applications',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-laptop',
            title: 'SaaS Solutions',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-money',
            title: 'E-Commerce Platforms',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-segmentation',
            title: 'Research',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-analytics',
            title: 'Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-settings',
            title: 'Technology',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        }
    ]   

}
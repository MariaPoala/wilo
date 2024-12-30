import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-featured-services',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './featured-services.component.html',
    styleUrl: './featured-services.component.scss'
})
export class FeaturedServicesComponent {

    singleFeaturedServicesItem = [
        {
            icon: 'images/icon/icon1.png',
            title: 'Online',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/icon/icon2.png',
            title: 'In-person',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/icon/icon3.png',
            title: 'Business',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        }
    ]

}
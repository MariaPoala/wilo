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

    sectionTitle = [
        {
            title: 'How We Take Your Business From Good To Great',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleFeaturedServicesBox = [
        {
            icon: 'flaticon-analysis',
            title: 'Analyze Your Data Needs',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'flaticon-structure',
            title: 'Develop A Customized Plan',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'flaticon-idea',
            title: 'Implement Your Solution',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        }
    ]

}
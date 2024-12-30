import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {

    sectionTitle = [
        {
            title: 'Services We Can Help You With',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleServicesBoxItem = [
        {
            icon: 'images/services/icon7.png',
            title: 'Big Data Analysis',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon8.png',
            title: 'Robust Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon9.png',
            title: 'Marketing Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon10.png',
            title: 'Data Visualization',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon11.png',
            title: 'Securities Research',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon12.png',
            title: 'Data Governance',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right',
            link: 'service-details'
        }
    ]

}
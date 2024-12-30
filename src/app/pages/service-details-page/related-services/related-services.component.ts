import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-related-services',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './related-services.component.html',
    styleUrl: './related-services.component.scss'
})
export class RelatedServicesComponent {

    sectionTitle = [
        {
            title: 'More Services You Might Like'
        }
    ]
    singleSolutionsBox = [
        {
            icon: 'images/services/icon1.png',
            title: 'Data Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'images/services/icon2.png',
            title: 'AI & ML Development',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        },
        {
            icon: 'images/services/icon3.png',
            title: 'Data Science',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'service-details',
            linkText: 'View Details'
        }
    ]

}
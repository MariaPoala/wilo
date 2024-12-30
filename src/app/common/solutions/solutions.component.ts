import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-solutions',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './solutions.component.html',
    styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {

    sectionTitle = [
        {
            subTitle: 'Our Solutions',
            title: 'We Different From Others Should Choose Us',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
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
        }
    ]

}
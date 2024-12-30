import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

    aboutImg = [
        {
            img: 'images/about/img5.png'
        }
    ]
    aboutContent = [
        {
            subTitle: 'About Us',
            title: 'Business Analytics For Data-Driven Solutions',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us'
        }
    ]
    aboutList = [
        {
            icon: 'flaticon-tick',
            title: 'Big Data'
        },
        {
            icon: 'flaticon-tick',
            title: 'Data Visualization'
        },
        {
            icon: 'flaticon-tick',
            title: 'Data Warehousing'
        },
        {
            icon: 'flaticon-tick',
            title: 'Data Management'
        },
        {
            icon: 'flaticon-tick',
            title: 'Business Intelligence'
        },
        {
            icon: 'flaticon-tick',
            title: 'Retail Solutions'
        }
    ]

}
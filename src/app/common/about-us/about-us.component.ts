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

    aboutImage = [
        {
            img: 'images/about/img1.png'
        }
    ]
    aboutContent = [
        {
            subTitle: 'About Us',
            title: 'Drive Digital Revolution Through Data Science',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us'
        }
    ]
    featuresList = [
        {
            icon: 'images/icon1.png',
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: 'images/icon2.png',
            title: '45+',
            subTitle: 'Team members'
        },
        {
            icon: 'images/icon3.png',
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'images/icon4.png',
            title: '80%',
            subTitle: 'Senior scientist'
        }
    ]

}
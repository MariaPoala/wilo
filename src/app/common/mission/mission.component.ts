import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mission',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './mission.component.html',
    styleUrl: './mission.component.scss'
})
export class MissionComponent {

    ourMissionImage = [
        {
            img: 'images/our-mission/img1.png'
        }
    ]
    ourMissionContent = [
        {
            subTitle: 'Our Mission',
            title: 'Data Science & Data Analysis Agency',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Read More',
            defaultBtnLink: 'about-us'
        }
    ]
    ourMissionList = [
        {
            icon: 'flaticon-tick',
            title: 'Global Experience'
        },
        {
            icon: 'flaticon-tick',
            title: 'Value for Results'
        },
        {
            icon: 'flaticon-tick',
            title: 'User Prespective'
        },
        {
            icon: 'flaticon-tick',
            title: 'Business Prespective'
        },
        {
            icon: 'flaticon-tick',
            title: 'Expert Prepective'
        },
        {
            icon: 'flaticon-tick',
            title: 'Retail Solutions'
        }
    ]

}
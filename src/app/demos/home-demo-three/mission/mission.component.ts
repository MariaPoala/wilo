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
            img: 'images/our-mission/img2.png'
        }
    ]
    ourMissionContent = [
        {
            title: 'Real-world Data Challenges Prepare to Be A Data Science Leader',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Apply Now',
            defaultBtnLink: '/'
        }
    ]
    featuresList = [
        {
            icon: 'flaticon-tick',
            title: 'Leadership-Focused Learning'
        },
        {
            icon: 'flaticon-tick',
            title: 'Experts at Teaching Online'
        },
        {
            icon: 'flaticon-tick',
            title: 'Proven Career Outcomes'
        },
        {
            icon: 'flaticon-tick',
            title: 'Diverse Backgrounds Welcome'
        },
        {
            icon: 'flaticon-tick',
            title: 'The Basics of Machine Learning'
        }
    ]

}
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-boxes',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './boxes.component.html',
    styleUrl: './boxes.component.scss'
})
export class BoxesComponent {

    singleBoxesItem = [
        {
            icon: 'images/icon/icon1.png',
            title: 'Marketing Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon2.png',
            title: 'Consumer Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon3.png',
            title: 'Sales Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        }
    ]

}
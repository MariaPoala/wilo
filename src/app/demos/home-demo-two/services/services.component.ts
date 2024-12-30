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
            subTitle: "Our Services",
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleServicesItem = [
        {
            icon: 'images/services/icon1.png',
            title: 'Customer Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon2.png',
            title: 'Risk Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon3.png',
            title: 'Social Media Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon4.png',
            title: 'Real Time Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon5.png',
            title: 'Big Data Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'images/services/icon6.png',
            title: 'Business Analytics',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: 'service-details'
        }
    ]

}
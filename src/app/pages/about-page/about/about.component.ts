import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

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
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
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
    aboutText = [
        {
            title: 'Our History',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Activate Listening',
            featuresList2: 'Brilliant minds',
            featuresList3: 'Better. Best. Wow!',
            featuresList4: 'Branding it better!',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Creating. Results.',
            featuresList2: 'Expect more',
            featuresList3: 'Good thinking',
            featuresList4: 'In real we trust',
            icon: 'flaticon-tick'
        },
        {
            title: 'Who we are',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Stay real. Always.',
            featuresList2: 'We have you covered',
            featuresList3: 'We turn heads',
            featuresList4: 'Your brand, promoted',
            icon: 'flaticon-tick'
        }
    ]

}
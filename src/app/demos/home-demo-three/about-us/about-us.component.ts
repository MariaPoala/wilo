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
            img: 'images/about/img4.png'
        }
    ]
    aboutContent = [
        {
            title: 'Data Science Training + Industry Experience',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'You will learn about training data, and how to use a set of data to discover potentially predictive relationships. As you build the movie recommendation system, you will learn how to train algorithms using training data so you can predict the outcome for future datasets. You will also learn about overtraining and techniques to avoid it such as cross-validation. All of these skills are fundamental to machine learning.',
            paragraphText3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us'
        }
    ]
    contentList = [
        {
            icon: 'flaticon-tick',
            title: 'What is regularization and why it is useful',
        },
        {
            icon: 'flaticon-tick',
            title: 'Perhaps the most popular data science methodologies'
        }
    ]

}
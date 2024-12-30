import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './funfacts.component.html',
    styleUrl: './funfacts.component.scss'
})
export class FunfactsComponent {

    singleFunfactsItem = [
        {
            icon: "images/funfacts/icon1.png",
            title: '10 Years',
            subTitle: 'On the market'
        },
        {
            icon: "images/funfacts/icon2.png",
            title: '45+',
            subTitle: 'Team members'
        },
        {
            icon: "images/funfacts/icon3.png",
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: "images/funfacts/icon4.png",
            title: '90%',
            subTitle: 'Senior scientist'
        }
    ]

}
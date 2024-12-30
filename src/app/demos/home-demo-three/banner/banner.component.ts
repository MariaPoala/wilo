import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    heroBannerContent = [
        {
            title: 'Learn Machine Learning',
            paragraphText: 'Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Explore Bootcamps',
            defaultBtnLink: 'events'
        }
    ]

}
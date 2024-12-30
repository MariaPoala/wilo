import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-events-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './events-page.component.html',
    styleUrl: './events-page.component.scss'
})
export class EventsPageComponent {

    singleEvents = [
        {
            img: 'images/events/img1.jpg',
            date: 'Wed, 20 May, 2024',
            title: 'Global Conference on Business Management',
            location: 'Vancover, Canada'
        },
        {
            img: 'images/events/img2.jpg',
            date: 'Tue, 19 May, 2024',
            title: 'International Conference on Teacher Education',
            location: 'Sydney, Australia'
        },
        {
            img: 'images/events/img3.jpg',
            date: 'Mon, 18 May, 2024',
            title: 'International Conference on Special Needs Education',
            location: 'Istanbul, Turkey'
        },
        {
            img: 'images/events/img4.jpg',
            date: 'Sun, 17 May, 2024',
            title: 'International Conference on Literacy Teaching',
            location: 'Athens, Greece'
        },
        {
            img: 'images/events/img5.jpg',
            date: 'Sat, 16 May, 2024',
            title: 'International Conference on Educational Administration',
            location: 'Rome, Italy'
        },
        {
            img: 'images/events/img6.jpg',
            date: 'Fri, 15 May, 2024',
            title: 'International Conference on Education and Pedagogy',
            location: 'Athens, Greece'
        },
        {
            img: 'images/events/img7.jpg',
            date: 'Thu, 14 May, 2024',
            title: 'Research Conference Aims and Objectives',
            location: 'Tokyo, Japan'
        },
        {
            img: 'images/events/img8.jpg',
            date: 'Wed, 13 May, 2024',
            title: 'Conference on Gender Discrimination in Education',
            location: 'Oslo, Norway'
        },
        {
            img: 'images/events/img9.jpg',
            date: 'Tue, 12 May, 2024',
            title: 'Quality and Improvement in Education Conference',
            location: 'Tokyo, Japan'
        }
    ]

}
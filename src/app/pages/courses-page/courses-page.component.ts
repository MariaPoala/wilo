import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-courses-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './courses-page.component.html',
    styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent {

    singleCoursesBox = [
        {
            courseImg: 'images/courses/img1.jpg',
            coursePrice: 'Free',
            coursePriceClass: 'free',
            authorImg: 'images/user1.jpg',
            authorName: 'Alex Morgan',
            title: 'Introduction to Quantitative Methods',
            link: 'course-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '8 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'images/courses/img2.jpg',
            coursePrice: '$49',
            coursePriceClass: 'paid',
            authorImg: 'images/user2.jpg',
            authorName: 'Sarah Taylor',
            title: 'Introduction to Linear Models and Matrix Algebra',
            link: 'course-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '7 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'images/courses/img3.jpg',
            coursePrice: '$69',
            coursePriceClass: 'paid',
            authorImg: 'images/user3.jpg',
            authorName: 'David Warner',
            title: 'Data Science: Inference and Modeling',
            link: 'course-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '2 Weeks Long',
            studentApply: 'Not Available'
        },
        {
            courseImg: 'images/courses/img4.jpg',
            coursePrice: '$99',
            coursePriceClass: 'paid',
            authorImg: 'images/user1.jpg',
            authorName: 'Alex Morgan',
            title: 'The Data Science Course: Complete Data Science',
            link: 'course-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '8 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'images/courses/img5.jpg',
            coursePrice: '$49',
            coursePriceClass: 'paid',
            authorImg: 'images/user2.jpg',
            authorName: 'Sarah Taylor',
            title: 'Java Programming Masterclass for Developers',
            link: 'course-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '7 Weeks Long',
            studentApply: 'Available Now'
        },
        {
            courseImg: 'images/courses/img6.jpg',
            coursePrice: '$69',
            coursePriceClass: 'paid',
            authorImg: 'images/user3.jpg',
            authorName: 'David Warner',
            title: 'Machine Learning A-Z™: Hands-On Python',
            link: 'course-details',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            courseDuration: '2 Weeks Long',
            studentApply: 'Not Available'
        }
    ]

}
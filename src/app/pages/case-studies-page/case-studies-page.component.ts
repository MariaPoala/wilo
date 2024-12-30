import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-case-studies-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './case-studies-page.component.html',
    styleUrl: './case-studies-page.component.scss'
})
export class CaseStudiesPageComponent {

    singleProjectsBox = [
        {
            icon: 'bx bx-plus',
            img: 'images/projects/img1.jpg',
            title: 'Movie Recommendation',
            subTitle: 'System Project',
            link: 'case-study-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'images/projects/img2.jpg',
            title: 'Customer Segmentation',
            subTitle: 'Machine Learning',
            link: 'case-study-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'images/projects/img3.jpg',
            title: 'Data Analysis',
            subTitle: 'Web Projects',
            link: 'case-study-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'images/projects/img4.jpg',
            title: 'Detection Projects',
            subTitle: 'Programming',
            link: 'case-study-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'images/projects/img5.jpg',
            title: 'Data Scientist',
            subTitle: 'Data Science',
            link: 'case-study-details'
        },
        {
            icon: 'bx bx-plus',
            img: 'images/projects/img6.jpg',
            title: 'Benefits Research',
            subTitle: 'Science Projects',
            link: 'case-study-details'
        }
    ]

}
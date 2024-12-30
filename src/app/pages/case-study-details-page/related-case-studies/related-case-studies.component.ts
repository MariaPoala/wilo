import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-related-case-studies',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './related-case-studies.component.html',
    styleUrl: './related-case-studies.component.scss'
})
export class RelatedCaseStudiesComponent {

    sectionTitle = [
        {
            title: 'More Projects You Might Like'
        }
    ]
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
        }
    ]

}
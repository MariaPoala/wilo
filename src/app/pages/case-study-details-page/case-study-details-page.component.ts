import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { RelatedCaseStudiesComponent } from './related-case-studies/related-case-studies.component';

@Component({
    selector: 'app-case-study-details-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, RelatedCaseStudiesComponent, FooterComponent],
    templateUrl: './case-study-details-page.component.html',
    styleUrl: './case-study-details-page.component.scss'
})
export class CaseStudyDetailsPageComponent {

    caseStudyDetailsImage = [
        {
            img: 'images/projects/projects-details1.jpg'
        }
    ]
    caseStudyDetailsDesc = [
        {
            subTitle: 'Data Science',
            title1: 'Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python',
            paragraph1: 'Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.',
            img1: 'images/projects/img2.jpg',
            title2: 'Important Facts',
            paragraph2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            paragraph3: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.',
            title3: 'Results',
            paragraph4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.',
        }
    ]
    caseStudyDetailsDescImportantFacts = [
        {
            title: 'The Field of Data Science'
        },
        {
            title: 'The Problem'
        },
        {
            title: 'The Solution'
        },
        {
            title: 'The Skills'
        },
        {
            title: 'Statistics'
        },
        {
            title: 'Mathematics'
        }
    ]
    caseStudyDetailsInfo = [
        {
            icon: 'bx bx-user-pin',
            title: 'Client',
            subTitle: 'EnvyTheme',
        },
        {
            icon: 'bx bx-map',
            title: 'Location',
            subTitle: 'New York, USA',
        },
        {
            icon: 'bx bx-purchase-tag',
            title: 'Technologies',
            subTitle: 'Python, Data Science',
        },
        {
            icon: 'bx bx-check',
            title: 'Completed',
            subTitle: '28 April 2024',
        },
        {
            icon: 'bx bx-globe',
            title: 'Website',
            subTitle: 'EnvyTheme.com',
        }
    ]

}
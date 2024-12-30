import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-case-studies',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgFor],
    templateUrl: './case-studies.component.html',
    styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {

    // Owl Carousel
    caseStudiesSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		]
    }
    
    // Content
    singleCaseStudyItem = [
        {
            subTitle: 'Case study #1',
            title: 'Data Science in Pharmaceutical Industries',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            link: 'case-study-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'images/case-study/img1.jpg'
        },
        {
            subTitle: 'Case study #2',
            title: 'Mathematics, Advanced Statistics in Python',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            link: 'case-study-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'images/case-study/img2.jpg'
        }
    ]

}
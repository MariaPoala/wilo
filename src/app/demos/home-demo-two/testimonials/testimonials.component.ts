import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [RouterLink, NgFor, CarouselModule],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    // Content
    sectionTitle = [
        {
            subTitle: "Testimonials",
            title: 'What Our Clients Are Saying?',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleTestimonialsBox = [
        {
            clientImg: 'images/testimonials/img1.jpg',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            clientName: 'Alex Maxwell',
            clientDesignation: 'CEO at EnvyTheme'
        },
        {
            clientImg: 'images/testimonials/img2.jpg',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            clientName: 'David Warner',
            clientDesignation: 'CEO at Envato'
        },
        {
            clientImg: 'images/testimonials/img3.jpg',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            clientName: 'Sarah Taylor',
            clientDesignation: 'CEO at ThemeForest'
        }
    ]
    testimonialsBtn = [
        {
            link: ".",
            icon: 'flaticon-view',
            text: 'Check Out All Reviews'
        }
    ]

    // Owl Carousel
    testimonialsSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		],
        responsive: {
			0: {
				items: 1
			},
			515: {
				items: 1
			},
			695: {
				items: 2
			},
			935: {
				items: 2
			},
			1115: {
				items: 2
			}
		}
    }

}
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-explore-learning',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf, NgClass],
    templateUrl: './explore-learning.component.html',
    styleUrl: './explore-learning.component.scss'
})
export class ExploreLearningComponent {

    // Content
    exploreLearningContent = [
        {
            title: 'Build Your Data Science Analytics Skills Online',
            paragraphText: 'Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.',
            linkText: 'Explore Learing',
            link: 'courses'
        }
    ]
    exploreLearningVideo = [
        {
            img: 'images/explore-learning.jpg',
            icon: 'flaticon-google-play'
        }
    ]

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}
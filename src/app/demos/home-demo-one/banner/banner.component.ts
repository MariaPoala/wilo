import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    // Content
    mainBannerContent = [
        {
            title: 'Data Science Consulting Services',
            paragraphText: 'Get professional & reliable research oriented solutions for Data Science and Machine Learning business needs. Enjoy stress free decesion making!',
            defaultBtnIcon: 'flaticon-structure',
            defaultBtnText: 'About Us',
            defaultBtnLink: 'about-us',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Video'
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
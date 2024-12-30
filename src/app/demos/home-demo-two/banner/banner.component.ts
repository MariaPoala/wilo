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
    bannerContent = [
        {
            title: 'Data Analytics Consulting Services',
            paragraphText: 'World leading reliable research & AI based Data Analytics solutions for Big Data companies and consumer business products. Drive your success without stress!',
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
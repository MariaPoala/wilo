import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

    contactInfoBox1 = [
        {
            icon: 'bx bx-map',
            title: 'Our Address',
            location: '175 5th Ave, New York, NY 10010, United States'
        }
    ]
    contactInfoBox2 = [
        {
            icon: 'bx bx-phone-call',
            title: 'contact-us',
            number: '(+44) - 45789 - 5789',
            email: 'hello@wilo.com'
        }
    ]
    contactInfoBox3 = [
        {
            icon: 'bx bx-time-five',
            title: 'Hours of Operation',
            text1: 'Monday - Friday: 09:00 - 20:00',
            text2: 'Sunday & Saturday: 10:30 - 22:00'
        }
    ]

    sectionTitle = [
        {
            subTitle: "Get In Touch",
            title: 'Ready to Get Started?',
            paragraphText: 'Your email address will not be published. Required fields are marked *'
        }
    ]
    contactImage = [
        {
            img: 'images/contact.png'
        }
    ]

}
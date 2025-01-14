import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-partner',
    standalone: true,
    imports: [NgFor, RouterLink, NgClass],
    templateUrl: './partner.component.html',
    styleUrl: './partner.component.scss'
})
export class PartnerComponent {

    constructor (
        public router: Router
    ) {}

    partnerItem = [
        {
            img: "images/partner/img1.png"
        },
        {
            img: "images/partner/img2.png"
        },
        {
            img: "images/partner/img3.png"
        },
        {
            img: "images/partner/img4.png"
        },
        {
            img: "images/partner/img5.png"
        },
        {
            img: "images/partner/img6.png"
        }
    ]

}
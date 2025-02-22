import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf, NgClass],
    templateUrl: './funfacts.component.html',
    styleUrl: './funfacts.component.scss'
})
export class FunfactsComponent {

    constructor (
        public router: Router
    ) {}

    // Content
    singleFunfactsBox = [
        {
            icon: "images/funfacts/icon1.png",
            title: '10+',
            subTitle: 'Años de experiencia'
        },
        {
            icon: "images/funfacts/icon2.png",
            title: '45+',
            subTitle: 'Trabajadores'
        },
        {
            icon: "images/funfacts/icon3.png",
            title: '100+',
            subTitle: 'Obras entregadas'
        },
        {
            icon: "images/funfacts/icon4.png",
            title: '90+',
            subTitle: 'Clientes satisfechos'
        }
    ]

}
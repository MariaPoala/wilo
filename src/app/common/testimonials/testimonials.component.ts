import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
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


    singleTestimonialsItem = [
        {
            titulo: 'Visión',
            paragraphText: 'Ser reconocidos como la constructora líder en el mercado nacional, destacándonos por ofrecer soluciones innovadoras y sostenibles en el sector de la construcción, contribuyendo al desarrollo urbano, industrial y residencial, mientras fomentamos un impacto positivo en la sociedad y el medio ambiente.',
            clientImg: 'images/testimonials/img1.jpg',

        },
        {
            titulo: 'Misión',
            paragraphText: 'Proveer servicios de construcción de alta calidad, integrando tecnología, diseño y recursos sostenibles, para satisfacer las necesidades de nuestros clientes. Nos enfocamos en crear espacios funcionales y duraderos, con un compromiso constante hacia la excelencia, la seguridad y el respeto por el entorno.',
            clientImg: 'images/testimonials/img2.jpg',

        }
    ]


}
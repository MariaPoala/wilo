import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-history',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './history.component.html',
    styleUrl: './history.component.scss'
})
export class HistoryComponent {

    sectionTitle = [
        {
            subTitle: "Our History",
            title: 'Nuestros Valores',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    historyTimeline = [
        {
            name: 'Compromiso',
            description: 'Nos dedicamos a cumplir con cada proyecto en tiempo y forma, priorizando la satisfacción de nuestros clientes y el respeto por los acuerdos establecidos.',
            img: 'images/history/img3.jpg'
        },
        {
            name: 'Calidad',
            description: 'Trabajamos con los mejores materiales, herramientas y estándares, garantizando resultados duraderos y de excelencia en cada obra.',
            img: 'images/history/img3.jpg'
        },
        {
            name: 'Innovación',
            description: 'Implementamos tecnologías avanzadas y técnicas modernas para ofrecer soluciones eficientes y sostenibles en cada proyecto.',
            img: 'images/history/img3.jpg'
        },
        {
            name: 'Responsabilidad',
            description: 'Mantenemos un firme compromiso con la seguridad, el medio ambiente y el bienestar de todos los involucrados en nuestros proyectos.'
            , img: 'images/history/img3.jpg'
        },
        {
            name: 'Confianza',
            description: 'Construimos relaciones basadas en la transparencia y la comunicación, asegurando un trato honesto y profesional en todo momento.',
            img: 'images/history/img3.jpg'
        }
    ]

}
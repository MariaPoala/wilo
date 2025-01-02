import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-how-it-works',
    standalone: true,
    imports: [RouterLink, NgFor,  NgIf],
    templateUrl: './how-it-works.component.html',
    styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

    sectionTitle = [
        {
            subTitle: "Como empresa",
            title: 'Eventos importantes',
            paragraphText: 'Conoce los hitos que han impulsado nuestro crecimiento y reafirmado nuestra posición como líderes en el sector.'
        }
    ]
    singleProcessBox = [

        {
            img: 'images/process/img1.png',
            title: 'Fundación de Constrarna',
            paragraphText: 'Inicio de operaciones como una constructora comprometida con la excelencia y la innovación en proyectos de construcción.',
            number: '1'
        },
        {
            img: 'images/process/img2.png',
            title: 'Primer Proyecto Emblemático Completado',
            paragraphText: 'Culminación exitosa de un proyecto de gran envergadura que marcó un hito en nuestra historia.',
            number: '2'
        },
        {
            img: 'images/process/img3.png',
            title: 'Expansión a Nuevas Regiones',
            paragraphText: 'Apertura de operaciones en nuevas ciudades o regiones, llevando nuestros servicios a más comunidades.',
            number: '3'
        },
        {
            img: 'images/process/img4.png',
            title: 'Reconocimiento a la Excelencia en Construcción',
            paragraphText: 'Premio otorgado por entidades prestigiosas en reconocimiento a la calidad e innovación de nuestros proyectos.',
            number: '4'
        },
        {
            img: 'images/process/img5.png',
            title: 'Inauguración de un Proyecto Insignia',
            paragraphText: 'Apertura de un complejo residencial que resalta nuestro compromiso con el diseño y la funcionalidad.',
            number: '5'
        }


    ]

}
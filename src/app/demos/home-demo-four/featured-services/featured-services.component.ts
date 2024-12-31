import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-featured-services',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './featured-services.component.html',
    styleUrl: './featured-services.component.scss'
})
export class FeaturedServicesComponent {

    sectionTitle = [
        {
            title: 'Cómo llevamos su proyecto de bueno a excelente',
            paragraphText: 'En Constrarna, tu satisfacción es nuestro objetivo, y eso nos impulsa a transformar cada proyecto en una obra de excelencia. ¡Hablemos y hagamos realidad tus ideas!'
        }
    ]
    singleFeaturedServicesBox = [
        {
            icon: 'flaticon-analysis',
            title: 'Personalización total:',
            paragraphText: 'Trabajamos contigo para entender tus necesidades y diseñar soluciones a medida, ya sea en construcción, alquiler de maquinaria o suministro de materiales.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'flaticon-structure',
            title: 'Calidad garantizada:',
            paragraphText: 'Solo utilizamos materiales de primera y contamos con un equipo especializado que supervisa cada etapa del proceso.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'flaticon-idea',
            title: 'Innovación constante:',
            paragraphText: 'Incorporamos tecnología avanzada y técnicas modernas de construcción para maximizar eficiencia y durabilidad.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'flaticon-structure',
            title: 'Compromiso con los plazos:',
            paragraphText: 'Sabemos que el tiempo es valioso, por eso nos comprometemos a cumplir estrictamente con los cronogramas establecidos.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        },
        {
            icon: 'flaticon-idea',
            title: 'Atención al cliente excepcional:',
            paragraphText: 'Nuestro equipo está siempre disponible para resolver dudas y garantizar que tengas una experiencia impecable desde el inicio hasta la entrega.',
            linkIcon: 'flaticon-right',
            linkText: 'Read More',
            link: 'service-details'
        }
    ]

}
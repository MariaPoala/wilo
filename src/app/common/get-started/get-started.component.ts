import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [RouterLink, NgFor, NgClass, NgIf],
    templateUrl: './get-started.component.html',
    styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {

    constructor (
        public router: Router
    ) {}

    // Content
    projectStartImage = [
        {
            img: 'images/project-start.png'
        }
    ]
    projectStartContent = [
        {
            title: 'En Constrarna',
            paragraphText: '"En Constrarna, nos especializamos en llevar a cabo todo tipo de proyectos de construcción, adaptándonos a las necesidades específicas de cada cliente. Desde pequeñas remodelaciones hasta grandes desarrollos inmobiliarios, nuestro equipo altamente capacitado ofrece soluciones eficientes, seguras y de calidad. Nos comprometemos a ejecutar proyectos que no solo cumplen con los más altos estándares de la industria, sino que también se alinean con las expectativas y objetivos de nuestros clientes. Con una amplia experiencia en diversos sectores, garantizamos resultados excepcionales en cada etapa del proceso, desde el diseño hasta la entrega final."',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Contactenos',
            defaultBtnLink: 'contact-us'
        }
    ]

}
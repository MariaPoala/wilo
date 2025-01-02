import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-courses-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './courses-page.component.html',
    styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent {

    singleCoursesBox = [
        {
            courseImg: 'images/proyecto/proy1.jpg',
            coursePrice: 'Consultas',
            coursePriceClass: 'free',
            authorImg: 'images/user1.jpg',
            authorName: 'Cliente A',
            title: 'Construcción de Viviendas Residenciales',
            link: 'project-details',
            paragraphText: 'Transformamos ideas en hogares cómodos y modernos, diseñados con funcionalidad y estilo para una vida excepcional.',
            courseDuration: '12 meses',
            studentApply: 'En Progreso'
        },
        {
            courseImg: 'images/proyecto/proy2.jpg',
            coursePrice: '$50,000',
            coursePriceClass: 'paid',
            authorImg: 'images/user2.jpg',
            authorName: 'Cliente B',
            title: 'Diseño y Construcción de Oficinas Corporativas',
            link: 'project-details',
            paragraphText: 'Diseñamos y construimos oficinas adaptadas a las necesidades de tu empresa, con espacios funcionales y diseño moderno.',
            courseDuration: '8 meses',
            studentApply: 'Completado'
        },
        {
            courseImg: 'images/proyecto/proy1.jpg',
            coursePrice: '$100,000',
            coursePriceClass: 'paid',
            authorImg: 'images/user3.jpg',
            authorName: 'Cliente C',
            title: 'Restauración de Hotel Boutique',
            link: 'project-details',
            paragraphText: 'Restauramos un hotel histórico, fusionando la tradición con el confort y lujo moderno para una experiencia única.',
            courseDuration: '6 meses',
            studentApply: 'Completado'
        },
        {
            courseImg: 'images/proyecto/proy7.jpg',
            coursePrice: '$75,000',
            coursePriceClass: 'paid',
            authorImg: 'images/user1.jpg',
            authorName: 'Cliente D',
            title: 'Centro Comercial Plaza Norte',
            link: 'project-details',
            paragraphText: 'Desarrollamos espacios comerciales modernos, pensados para mejorar la experiencia del cliente y la rentabilidad del negocio.',
            courseDuration: '14 meses',
            studentApply: 'En Progreso'
        },
        {
            courseImg: 'images/proyecto/proy5.jpg',
            coursePrice: '$200,000',
            coursePriceClass: 'paid',
            authorImg: 'images/user2.jpg',
            authorName: 'Cliente E',
            title: 'Construcción de Fábrica de Productos Industriales',
            link: 'project-details',
            paragraphText: 'Construimos fábricas adaptadas a las necesidades de producción, con instalaciones modernas y eficientes.',
            courseDuration: '18 meses',
            studentApply: 'En Progreso'
        },
        {
            courseImg: 'images/proyecto/proy6.jpg',
            coursePrice: 'Consultas',
            coursePriceClass: 'free',
            authorImg: 'images/user3.jpg',
            authorName: 'Cliente F',
            title: 'Restauración de Monumento Histórico',
            link: 'project-details',
            paragraphText: 'Somos expertos en la restauración de monumentos históricos, respetando su valor cultural y asegurando su preservación.',
            courseDuration: '10 meses',
            studentApply: 'Completado'
        }
    ]


}
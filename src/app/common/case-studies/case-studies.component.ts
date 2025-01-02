import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-case-studies',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgFor],
    templateUrl: './case-studies.component.html',
    styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {

    // Owl Carousel
    caseStudiesSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-1'></i>",
            "<i class='flaticon-right-1'></i>"
        ]
    }

    // Content
    singleCaseStudyItem = [
        {
            subTitle: 'RESIDENCIALES',
            title: 'Construcción y Diseño de Viviendas Residenciales',
            paragraphText1: 'En Constrarna, transformamos ideas en hogares únicos, diseñados para ofrecer comodidad, funcionalidad y un estilo de vida excepcional.',
            paragraphText2: 'Especialistas en proyectos residenciales, construimos casas modernas, sostenibles y adaptadas a las necesidades de cada familia, garantizando calidad y cumplimiento en cada detalle.',
            link: 'case-study-details',
            linkText: 'Ver más detalles',
            linkIcon: 'flaticon-view',
            img: 'images/case-study/img4.jpg'
        },
        {
            subTitle: 'CORPORATIVOS',
            title: 'Diseño y Construcción de Espacios Corporativos',
            paragraphText1: 'En Constrarna, desarrollamos proyectos corporativos que reflejan profesionalismo y modernidad, creando ambientes funcionales que potencian la productividad y el bienestar de los equipos.',
            paragraphText2: 'Ofrecemos soluciones completas para oficinas, sedes corporativas y centros de negocio, adaptándonos a las necesidades de cada empresa y asegurando estándares de calidad y diseño excepcionales.',
            link: 'case-study-details',
            linkText: 'Ver más detalles',
            img: 'images/case-study/img4.jpg'
        },
        {
            subTitle: 'HOTELEROS',
            title: 'Proyectos Hoteleros y de Hospedaje',
            paragraphText1: 'En Constrarna, diseñamos y construimos espacios hoteleros que combinan funcionalidad, confort y diseño innovador, adaptados a las necesidades del sector.',
            paragraphText2: 'Ofrecemos soluciones integrales para hoteles, desde la planificación y construcción hasta los acabados, asegurando calidad, eficiencia y una experiencia única para tus huéspedes.',
            link: 'case-study-details',
            linkText: 'Ver más detalles',
            linkIcon: 'flaticon-view',
            img: 'images/case-study/img4.jpg'
        },
        {
            subTitle: 'RESTAURACIÓN',
            title: 'Restauración de Edificaciones y Patrimonios',
            paragraphText1: 'En Constrarna, somos expertos en la recuperación y conservación de edificaciones históricas y patrimoniales. Respetamos cada detalle arquitectónico para preservar su valor cultural.',
            paragraphText2: 'Ofrecemos soluciones integrales de restauración, empleando técnicas avanzadas y materiales de alta calidad para garantizar resultados duraderos y estéticamente impecables.',
            link: 'case-study-details',
            linkText: 'Ver más detalles',
            img: 'images/case-study/img4.jpg'
        }
        ,
        {
            subTitle: 'COMERCIALES',
            title: 'Proyectos Comerciales y Obras de Construcción',
            paragraphText1: 'En Constrarna, llevamos a cabo proyectos comerciales adaptados a las necesidades específicas de cada cliente. Nos especializamos en construcción de espacios modernos y funcionales para negocios.',
            paragraphText2: 'Nuestros servicios incluyen diseño, construcción y equipamiento de locales comerciales, garantizando calidad y cumplimiento de plazos. Transformamos tus ideas en realidad con soluciones integrales y materiales de primera.',
            link: 'case-study-details',
            linkText: 'Ver más detalles',
            linkIcon: 'flaticon-view',
            img: 'images/case-study/img4.jpg'
        }
    ]

}
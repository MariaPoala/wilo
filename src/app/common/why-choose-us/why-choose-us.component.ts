import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-why-choose-us',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './why-choose-us.component.html',
    styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {

    whyChooseUsContent = [
        {
            title: '¿Por que elegirnos?',
            paragraphText1: 'En Constrarna brindamos soluciones integrales para el sector de la construcción, combinando calidad, innovación y experiencia. Ofrecemos materiales de primera, alquiler de maquinaria y ejecución de proyectos personalizados, siempre con atención al detalle. Nuestro equipo altamente capacitado asegura cumplimiento en los plazos y resultados confiables. Además, estamos comprometidos con la sostenibilidad y prácticas responsables. Con Constrarna, tus proyectos están en manos de expertos dedicados a convertir tus ideas en realidad.',
            paragraphText2: 'In 2015, we were rated A+ by BBB, recognized as the top IT company by Clutch, as well as featured on The Silicon Review listing among 10 Fastest Growing Data Analytics Companies.',
            linkIcon: 'flaticon-right',
            linkText: 'Mas sobre nosotros',
            link: 'about-us'
        }
    ]
    ourBrandPartnersList = [
        {
            title: 'Nuestros Proveedores',
            linkText: 'View All',
            link: 'partner'
        }
    ]
    brandPartnersImg = [
        {
            img: 'images/proveedor/prov1.png'
        },
        {
            img: 'images/proveedor/prov2.png'
        },
        {
            img: 'images/proveedor/prov3.png'
        },
        {
            img: 'images/proveedor/prov4.png'
        },
        {
            img: 'images/proveedor/prov5.png'
        },
        {
            img: 'images/proveedor/prov6.png'
        }
    ]

}
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

    aboutImage = [
        {
            img: 'images/about/img6.jpg'
        }
    ]
    aboutContent = [
        {
            subTitle: 'About Us',
            title: 'Construyendo el Futuro con Innovación y Calidad',
            paragraphText1: 'En Constrarna, nos dedicamos a transformar ideas en proyectos tangibles, ofreciendo soluciones integrales en construcción, ferretería y alquiler de maquinaria. Nuestro compromiso es brindar excelencia en cada etapa, desde el diseño hasta la entrega final.',
            paragraphText2: 'Con una trayectoria destacada, trabajamos con los más altos estándares de calidad, adaptándonos a las necesidades de nuestros clientes y garantizando resultados que superen sus expectativas. En Constrarna, construimos más que espacios, creamos confianza.',
          
        }
    ]
    featuresList = [
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
    aboutText = [
        {
            title: 'Our History',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Activate Listening',
            featuresList2: 'Brilliant minds',
            featuresList3: 'Better. Best. Wow!',
            featuresList4: 'Branding it better!',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Creating. Results.',
            featuresList2: 'Expect more',
            featuresList3: 'Good thinking',
            featuresList4: 'In real we trust',
            icon: 'flaticon-tick'
        },
        {
            title: 'Who we are',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Stay real. Always.',
            featuresList2: 'We have you covered',
            featuresList3: 'We turn heads',
            featuresList4: 'Your brand, promoted',
            icon: 'flaticon-tick'
        }
    ]

}
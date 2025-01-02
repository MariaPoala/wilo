import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

    contactInfoBox1 = [
        {
            icon: 'bx bx-map',
            title: 'Dirección',
            location: 'Huancayo, calle real s/n'
        }
    ]
    contactInfoBox2 = [
        {
            icon: 'bx bx-phone-call',
            title: 'Contacto',
            number: '987456123',
            email: 'constrarna@gmail.com'
        }
    ]
    contactInfoBox3 = [
        {
            icon: 'bx bx-time-five',
            title: 'Horario',
            text1: 'Lunes - Viernes: 09:00 - 20:00',
            text2: 'Sabado & Domingo: 10:30 - 22:00'
        }
    ]

    sectionTitle = [
        {
            subTitle: "Contáctenos",
            title: '¿Listo para comenzar?',
            paragraphText: 'Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *'
        }
    ]
    contactImage = [
        {
            img: 'images/proyecto/imgcontac.png'
        }
    ]

}
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [RouterLink, NgFor],
	templateUrl: './banner.component.html',
	styleUrl: './banner.component.scss'
})
export class BannerComponent {

	bannerWrapperContent = [
        {
            title: 'CONSTRARNA',
            paragraphText: 'Una empresa multifuncional que brinda soluciones integrales al sector de la construcción. Ofrece servicios de venta de materiales de ferretería, alquiler de maquinaria y ejecución de proyectos personalizados. Su equipo experto garantiza calidad, cumplimiento y atención personalizada. Comprometida con la innovación y la sostenibilidad, Constrarna se posiciona como un aliado confiable para llevar a cabo proyectos exitosos.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Sobre nosotros',
            defaultBtnLink: 'Sobre nosotros',
            optionalBtnIcon: 'flaticon-tick',
            optionalBtnText: 'Servicios',
            optionalBtnLink: 'servicio'
        }
    ]

}
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiciosService } from '../../shared/servicios.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, FooterComponent, ReactiveFormsModule, HttpClientModule, NgIf],
    providers: [ServiciosService],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
    contactForm: FormGroup;
    mensajeExito: boolean = false;

    constructor(private fb: FormBuilder, private servicio: ServiciosService) {
      this.contactForm = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]], // Agregar Validators.email
        telefono: ['', Validators.required],
        message: ['', Validators.required]
      });
    }
  
    onSubmit() {
        if (this.contactForm.valid) {
          this.servicio.postCorreo(this.contactForm.value).subscribe(
            response => {
              console.log('Correo enviado:', response);
              this.mensajeExito = true; 
              setTimeout(() => {
                this.mensajeExito = false; 
              }, 4000);
              this.contactForm.reset()
            },
            error => {
              console.error('Error al enviar el correo:', error);
            }
          );
        } else {
          console.log('Formulario inválido');
        }
      }
      
      
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
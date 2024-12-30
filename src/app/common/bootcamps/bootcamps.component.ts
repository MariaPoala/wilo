import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-bootcamps',
    standalone: true,
    imports: [RouterLink, NgFor],
    templateUrl: './bootcamps.component.html',
    styleUrl: './bootcamps.component.scss'
})
export class BootcampsComponent {

    bootcampsContent = [
        {
            title: 'Check Full Schedule for In-person Data Science Bootcamps',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Check Out All Bootcamps',
            defaultBtnLink: 'events'
        }
    ]

}
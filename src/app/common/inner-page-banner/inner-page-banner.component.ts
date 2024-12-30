import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-inner-page-banner',
    standalone: true,
    imports: [RouterLink, NgStyle],
    templateUrl: './inner-page-banner.component.html',
    styleUrl: './inner-page-banner.component.scss'
})
export class InnerPageBannerComponent {

    @Input() pageTitle: string = '';

}
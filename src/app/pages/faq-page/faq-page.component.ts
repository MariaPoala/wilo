import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-faq-page',
    standalone: true,
    imports: [RouterLink, NgFor, NgClass, NgIf, NavbarComponent, InnerPageBannerComponent, GetStartedComponent, FooterComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

    // Accordion
    openSectionIndex: number = 0;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

}
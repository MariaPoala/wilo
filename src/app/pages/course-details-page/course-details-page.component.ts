import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { RelatedCoursesComponent } from './related-courses/related-courses.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
    selector: 'app-course-details-page',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, NavbarComponent, InnerPageBannerComponent, RelatedCoursesComponent, FooterComponent],
    templateUrl: './course-details-page.component.html',
    styleUrl: './course-details-page.component.scss'
})
export class CourseDetailsPageComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
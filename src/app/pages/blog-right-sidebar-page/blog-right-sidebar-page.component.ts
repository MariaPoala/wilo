import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';

@Component({
    selector: 'app-blog-right-sidebar-page',
    standalone: true,
    imports: [RouterLink, NgFor, NavbarComponent, InnerPageBannerComponent, WidgetSidebarComponent, FooterComponent],
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrl: './blog-right-sidebar-page.component.scss'
})
export class BlogRightSidebarPageComponent {

    singleBlogPost = [
        {
            postImg: 'images/blog/img4.jpg',
            postTitle: 'The Data Surrounding Higher Education',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'images/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'images/blog/img5.jpg',
            postTitle: 'Conversion Rate the Sales Funnel Optimization',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'images/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'images/blog/img6.jpg',
            postTitle: 'Business Data is changing the world’s Energy',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'images/user3.jpg',
            postAuthorName: 'David Warner'
        },
        {
            postImg: 'images/blog/img7.jpg',
            postTitle: 'The data-driven approach to understanding',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'images/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'images/blog/img8.jpg',
            postTitle: 'Finding the blocks of neighboring fields',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'images/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'images/blog/img9.jpg',
            postTitle: 'Data into Your Enterprise to Drive Insights',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'images/user3.jpg',
            postAuthorName: 'David Warner'
        },
        {
            postImg: 'images/blog/img10.jpg',
            postTitle: 'Introduction to Recommendation Engines',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'images/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'images/blog/img11.jpg',
            postTitle: '5 Things You Should Know About Data',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'images/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        }
    ]

}
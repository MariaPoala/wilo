import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [RouterLink, NgFor, NgClass],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {

    constructor (
        public router: Router
    ) {}

    // Content
    sectionTitle = [
        {
            subTitle: "Our Blog",
            title: 'Latest Valuable Insights',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleBlogPost = [
        {
            postImg: 'images/blog/img1.jpg',
            postTitle: 'Six Ways to Make Smarter Decisions',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'images/user1.jpg',
            postAuthorName: 'Alex Morgan'
        },
        {
            postImg: 'images/blog/img2.jpg',
            postTitle: 'The Challenges to Tackle Before You Start With AI',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'images/user2.jpg',
            postAuthorName: 'Sarah Taylor'
        },
        {
            postImg: 'images/blog/img3.jpg',
            postTitle: 'Why Organisations Want an Analytics Platform',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'images/user3.jpg',
            postAuthorName: 'David Warner'
        }
    ]

}
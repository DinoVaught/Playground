import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgForOf],
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title: string = ' Major Swag';
    // categories: string[] = ["US Presidents", "Popular First Ladies", "Movie Classics", "Sports" ];
    categories: string[] = ["US Presidents", "Popular First Ladies", "Movie Classics", "Sports", "TV Sitcoms", "Celebrity Nicknames", "Cartoon Characters", "Board Games", "Popular Snacks", "Classic TV Commercials"];
}
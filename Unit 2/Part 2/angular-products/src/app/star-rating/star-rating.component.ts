import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  auxRating!: number;
  @Input() rating!: number;

  constructor() { }

  ngOnInit(): void {
    this.restoreRating();
  }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating(rating: number) {
    this.rating = rating;
  }

}

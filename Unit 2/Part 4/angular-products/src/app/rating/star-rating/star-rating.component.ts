import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  auxRating!: number;
  @Input() rating!: number;
  @Output() ratingChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.restoreRating();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.restoreRating();
  }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }

}

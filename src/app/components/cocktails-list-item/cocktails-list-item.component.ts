import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  Output,
} from '@angular/core';
import { CocktailsCatalogService } from 'src/app/services/cocktails-catalog.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-cocktails-list-item',
  templateUrl: './cocktails-list-item.component.html',
  styleUrls: ['./cocktails-list-item.component.scss'],
})
export class CocktailsListItemComponent implements AfterViewInit {
  @Input() source = new Cocktail();
  @Output() clicked = new EventEmitter();

  readonly MAX_ITEMS = 2;

  constructor(
    @Host() private elementRef: ElementRef,
    private cocktailsCatalogService: CocktailsCatalogService
  ) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      this.getDetail.bind(this),
      { root: null, rootMargin: '0px', threshold: 0.0 }
    );
    observer.observe(this.elementRef.nativeElement);
  }

  handleClicked() {
    this.clicked.emit(this.source);
  }

  getDetail(entries: IntersectionObserverEntry[]) {
    if (entries[0].isIntersecting) {
      this.cocktailsCatalogService
        .getCocktailDetail(entries[0].target.id)
        .subscribe((detail) => (this.source = detail));
    }
  }
}

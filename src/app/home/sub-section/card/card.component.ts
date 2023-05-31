import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ROUTE_TOKENS } from '../../../models/route-tokens';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product!: Product;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

}

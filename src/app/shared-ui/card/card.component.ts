import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ROUTE_TOKENS } from 'src/app/models/route-tokens';

@Component({
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    // create an input property called product that is of type Product and make it required
    @Input({ required: true }) product!: Product;

    readonly ROUTE_TOKENS = ROUTE_TOKENS;
}

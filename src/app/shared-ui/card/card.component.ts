import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    // create an input property called product that is of type Product and make it required
    @Input({ required: true }) product!: Product;
}

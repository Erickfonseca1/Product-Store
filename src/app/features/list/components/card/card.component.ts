import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  //forma de declarar uma propriedade
  product = input.required<Product>();

  //output de product
  @Output() edit = new EventEmitter();

  //useEffect de product
  productTitle = computed(() => this.product().title);

  onEdit() {
    this.edit.emit()
  }
}

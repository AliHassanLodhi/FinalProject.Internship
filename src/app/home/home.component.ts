import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showDeals = false;
  deals = [
    { name: 'Burger Special', description: 'A juicy burger with fries', price: '$5.99', image: 'https://cdn.pixabay.com/photo/2024/07/03/13/23/burger-8869971_1280.jpg' },
    { name: 'Pizza Combo', description: 'A large pizza with soda', price: '$9.99', image: 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg' },
    { name: 'Pasta Delight', description: 'Pasta with garlic bread', price: '$7.99', image: 'https://cdn.pixabay.com/photo/2023/07/24/18/50/italian-8147681_1280.jpg' }
  ];

  toggleDeals() {
    this.showDeals = !this.showDeals;
  }

}

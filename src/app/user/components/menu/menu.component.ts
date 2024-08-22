import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



  menuCategories = [
    {
        name: 'Breakfast',
        items: [
            {
                name: 'Pancakes',
                image: 'assets/img/breakfast/pancakes.jpg',
                price: 5.99,
                rating: 4
            },
            {
                name: 'Mushroom Omelette',
                image: 'https://img.freepik.com/premium-photo/omelette-with-mushrooms-herbs-white-plate-isolated_890887-11427.jpg',
                price: 6.99,
                rating: 5
            },
            {
                name: 'Avocado Toast',
                image: 'https://img.freepik.com/premium-photo/avocado-toast-plate-isolated-white-background_181203-23058.jpg',
                price: 7.99,
                rating: 5
            }
        ]
    },
    {
        name: 'Lunch',
        items: [
            {
                name: 'Burger',
                image: 'assets/img/burgerimg.png',
                price: 8.99,
                rating: 5
            },
            {
                name: 'Roasted Lamb Salad',
                image: 'https://www.kitchensanctuary.com/wp-content/uploads/2014/05/Crispy-Lamb-Salad-with-Feta-and-Sunblush-tomatoes-recipe-square-FS-2.jpg',
                price: 7.99,
                rating: 5
            },
            {
                name: 'Grilled Chicken Sandwich',
                image: 'https://recipes.net/wp-content/uploads/2023/05/grilled-chicken-sandwich-recipe_ebd0403939d98e157fea1bd85a8c557d.jpeg',
                price: 9.99,
                rating: 4
            }
        ]
    },
    {
        name: 'Dinner',
        items: [
            {
                name: 'Grilled Steak',
                image: 'https://img.freepik.com/premium-photo/grilled-steak-isolated-white-background_867452-17906.jpg',
                price: 14.99,
                rating: 5
            },
            {
                name: 'Lasagna',
                image: 'https://img.freepik.com/free-photo/traditional-lasagna-with-rich-bolognese-sauce_60438-3536.jpg',
                price: 13.99,
                rating: 5
            },
            {
                name: 'Pizza',
                image: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
                price: 15.99,
                rating: 3
            }
        ]
    },
    {
        name: 'Desserts',
        items: [
            {
                name: 'Coffee Cake',
                image: 'https://img.freepik.com/premium-vector/chocolate-brownie-with-caramel-nuts_1057087-14508.jpg',
                price: 14.99,
                rating: 3
            },
            {
              name: 'Strawberry Cheesecake',
              image: 'https://img.freepik.com/premium-photo/slice-cheesecake-with-strawberry-top_865967-22909.jpg',
              price: 15.99,
              rating: 5
          },
            {
                name: 'Chocolate Lava Cake',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRT7gqVCmKBZaacxait9sR4aq2ktpEW1qqZw&s',
                price: 13.9,
                rating: 4
            }
           
        ]
    }
];



  constructor() {
  
  }

  ngOnInit() {
   
  }






}




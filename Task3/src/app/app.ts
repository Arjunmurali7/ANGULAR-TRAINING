import { Component } from '@angular/core'; // imp comnts
import { Product } from './product-list/product-list'; //imp product list cmpnt clss

@Component({ //decorater ties together all
  selector: 'app-root', // entry point custom htmltag
  imports:[Product],  // allow  compnt in root
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { //use this class in main.ts
   title = ('Product_List');
}
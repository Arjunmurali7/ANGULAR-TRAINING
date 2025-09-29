import { Component } from '@angular/core'; //import component
import { CurrencyPipe,NgClass,NgFor } from '@angular/common'; //imports ngclass and for

@Component({
  selector: 'app-product', // component name
  imports: [CurrencyPipe,NgClass,NgFor], // imports
  templateUrl: './product-list.html', //points to ex htmlfile
  styleUrl: './product-list.css' //points to ex style file
})
export class Product { //exports cmpnt product app.ts) can import it.
   products=[
    { name : 'Laptop',price :500000,},
    {name : 'Headphone ', price :10000},
    {name : 'Mouse', price :10},
    {name : 'Cpu' , price :1500}

  ];

  isExpensive(price:number):boolean{ 
    return price>5000 // method used by template to decide css class to use it or not
  }

}
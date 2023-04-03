export interface Product {
  name: string;
  cost: number;
  color?: string;
  category: string;
  isDiscounted: boolean;
  discountedCost: number;
}


export const PRODUCTS_LIST: Product[] = [
  {
    name: 'Product1',
    cost: 100,
    color: 'black',
    category: 'Category1',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product2',
    cost: 200,
    color: 'blue',
    category: 'Category1',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product3',
    cost: 300,
    color: 'orange',
    category: 'Category1',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product4',
    cost: 400,
    color: 'white',
    category: 'Category2',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product5',
    cost: 500,
    color: 'black',
    category: 'Category2',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product6',
    cost: 600,
    color: 'black',
    category: 'Category3',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product7',
    cost: 700,
    color: 'black',
    category: 'Category4',
    isDiscounted: false,
    discountedCost: 100,
  },
  {
    name: 'Product8',
    cost: 800,
    color: 'pink',
    category: 'Category4',
    isDiscounted: true,
    discountedCost: 720,
  }
]
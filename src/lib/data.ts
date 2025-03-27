export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  gender: 'men' | 'women';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: '/images/men-tshirt.jpg',
    category: 'T-Shirts',
    description: 'A comfortable and versatile white t-shirt made from 100% cotton.',
    gender: 'men'
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79.99,
    image: '/images/men-jeans.jpg',
    category: 'Jeans',
    description: 'Modern slim fit jeans in a classic blue wash.',
    gender: 'men'
  },
  {
    id: '3',
    name: 'Leather Jacket',
    price: 199.99,
    image: '/images/men-jacket.jpg',
    category: 'Jackets',
    description: 'Classic leather jacket with a modern twist.',
    gender: 'men'
  },
  {
    id: '4',
    name: 'Floral Summer Dress',
    price: 89.99,
    image: '/images/women-dress.jpg',
    category: 'Dresses',
    description: 'Beautiful floral dress perfect for summer days.',
    gender: 'women'
  },
  {
    id: '5',
    name: 'High-Waisted Pants',
    price: 69.99,
    image: '/images/women-pants.jpg',
    category: 'Pants',
    description: 'Elegant high-waisted pants for a sophisticated look.',
    gender: 'women'
  },
  {
    id: '6',
    name: 'Silk Blouse',
    price: 119.99,
    image: '/images/women-blouse.jpg',
    category: 'Tops',
    description: 'Luxurious silk blouse in a timeless design.',
    gender: 'women'
  }
]; 
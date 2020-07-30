const pseudoServerResponse = [
  {
    section: 'pizza',
    id: 1,
    name: 'Pepperoni',
    description: 'Double pepperoni, mozzarella, marinara sauce, fresh basil',
    cost: 8.99,
    img_url: '/images/pepperoni.png',
  },
  {
    section: 'pizza',
    id: 2,
    name: 'Cheese',
    description: 'Mozzarella, marinara sauce, fresh basil',
    cost: 7.99,
    img_url: '/images/cheese.png',
  },
  {
    section: 'pizza',
    id: 3,
    name: 'Supreme',
    description: 'Pepperoni, fresh basil, mozzarella, italian sausage, bacon, mushrooms, red onions, black olives, green peppers, marinara sauce',
    cost: 11.99,
    img_url: '/images/supreme.png',
  },
  {
    section: 'pizza',
    id: 4,
    name: 'Meat Pizza',
    description: 'Pepperoni, ham, italian sausage, mozzarella, bacon, marinara sauce, fresh basil',
    cost: 11.99,
    img_url: '/images/meat.png',
  },
  {
    section: 'pizza',
    id: 5,
    name: 'Hawaiian',
    description: 'Ham, fresh pineapple, mozzarella, marinara sauce, fresh basil',
    cost: 10.99,
    img_url: '/images/hawaiian.png',
  },
  {
    section: 'pizza',
    id: 6,
    name: 'Sausage',
    description: 'Double italian sausage, mozzarella, marinara sauce, fresh basil',
    cost: 9.99,
    img_url: '/images/sausage.png',
  },
  {
    section: 'pizza',
    id: 7,
    name: 'Veggie',
    description: 'Green peppers, cherry tomatoes, mozzarella, ricotta, fresh parsley, mushrooms, black olives, red onions',
    cost: 10.99,
    img_url: '/images/veggie.png',
  },
  {
    section: 'pizza',
    id: 8,
    name: 'Chicken Club',
    description: 'Grilled chicken, cherry tomatoes, ricotta, fresh parsley, mozzarella, bacon, red onions',
    cost: 8.99,
    img_url: '/images/chicken.png',
  },
  {
    section: 'drinks',
    id: 101,
    name: 'Sprite',
    description: '20 fl.oz',
    cost: 1.79,
    img_url: '/images/sprite.png',
  },
  {
    section: 'drinks',
    id: 102,
    name: 'Coca Cola',
    description: '20 fl.oz',
    cost: 1.79,
    img_url: '/images/coke.png',
  },
  {
    section: 'drinks',
    id: 103,
    name: 'Fanta',
    description: '20 fl.oz',
    cost: 1.79,
    img_url: '/images/fanta.png',
  },
];

const userOrders = [
  {
    orderId: 12345,
    date: '10/20/2019',
    details: 'Address, etc',
  },
  {
    orderId: 12345,
    date: '01/10/2020',
    details: 'Address, etc',
  }
];

export { pseudoServerResponse, userOrders };
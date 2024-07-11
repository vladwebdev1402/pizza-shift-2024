import { Order } from '@/types';

const orders: Order[] = [
  {
    person: {
      firstname: 'firstname',
      lastname: 'lastname',
      middlename: 'middlename',
      phone: '89214206901',
    },
    receiverAddress: {
      street: 'street',
      house: 'house',
      apartment: 'apartment',
      comment: 'comment',
    },
    status: 1,
    cancellable: false,
    pizzas: [
      {
        id: '1',
        name: 'Пеперони',
        toppings: [
          {
            name: 'PINEAPPLE',
            cost: 50,
            img: '',
          },
          {
            name: 'CHEDDAR',
            cost: 50,
            img: '',
          },
          {
            name: 'HAM',
            cost: 50,
            img: '',
          },
          {
            name: 'TOMATO',
            cost: 50,
            img: '',
          },
        ],
        description: 'string',
        size: {
          name: 'SMALL',
          price: 0,
        },
        doughs: {
          name: 'THIN',
          price: 0,
        },
      },
      {
        id: '2',
        name: 'Чикибамбони',
        toppings: [
          {
            name: 'PINEAPPLE',
            cost: 50,
            img: '',
          },
          {
            name: 'CHEDDAR',
            cost: 50,
            img: '',
          },
          {
            name: 'HAM',
            cost: 50,
            img: '',
          },
          {
            name: 'TOMATO',
            cost: 50,
            img: '',
          },
        ],
        description: 'string',
        size: {
          name: 'SMALL',
          price: 0,
        },
        doughs: {
          name: 'THIN',
          price: 0,
        },
      },
      {
        id: '3',
        name: 'Тренболони',
        toppings: [
          {
            name: 'PINEAPPLE',
            cost: 50,
            img: '',
          },
          {
            name: 'CHEDDAR',
            cost: 50,
            img: '',
          },
          {
            name: 'HAM',
            cost: 50,
            img: '',
          },
          {
            name: 'TOMATO',
            cost: 50,
            img: '',
          },
        ],
        description: 'string',
        size: {
          name: 'SMALL',
          price: 0,
        },
        doughs: {
          name: 'THIN',
          price: 0,
        },
      },
    ],
  },
  {
    person: {
      firstname: 'firstname',
      lastname: 'lastname',
      middlename: 'middlename',
      phone: '89214206901',
    },
    receiverAddress: {
      street: 'street',
      house: 'house',
      apartment: 'apartment',
      comment: 'comment',
    },
    status: 2,
    cancellable: false,
    pizzas: [
      {
        id: '1',
        name: 'Пеперони',
        toppings: [
          {
            name: 'PINEAPPLE',
            cost: 50,
            img: '',
          },
          {
            name: 'CHEDDAR',
            cost: 50,
            img: '',
          },
          {
            name: 'HAM',
            cost: 50,
            img: '',
          },
          {
            name: 'TOMATO',
            cost: 50,
            img: '',
          },
        ],
        description: 'string',
        size: {
          name: 'SMALL',
          price: 0,
        },
        doughs: {
          name: 'THIN',
          price: 0,
        },
      },
      {
        id: '2',
        name: 'Чикибамбони',
        toppings: [
          {
            name: 'PINEAPPLE',
            cost: 50,
            img: '',
          },
          {
            name: 'CHEDDAR',
            cost: 50,
            img: '',
          },
          {
            name: 'HAM',
            cost: 50,
            img: '',
          },
          {
            name: 'TOMATO',
            cost: 50,
            img: '',
          },
        ],
        description: 'string',
        size: {
          name: 'SMALL',
          price: 0,
        },
        doughs: {
          name: 'THIN',
          price: 0,
        },
      },
      {
        id: '3',
        name: 'Тренболони',
        toppings: [
          {
            name: 'PINEAPPLE',
            cost: 50,
            img: '',
          },
          {
            name: 'CHEDDAR',
            cost: 50,
            img: '',
          },
          {
            name: 'HAM',
            cost: 50,
            img: '',
          },
          {
            name: 'TOMATO',
            cost: 50,
            img: '',
          },
        ],
        description: 'string',
        size: {
          name: 'SMALL',
          price: 0,
        },
        doughs: {
          name: 'THIN',
          price: 0,
        },
      },
    ],
  },
];

export { orders };

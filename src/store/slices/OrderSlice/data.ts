import { Order } from '@/types';

const orders: Order[] = [
  {
    _id: crypto.randomUUID(),
    person: {
      firstname: 'firstname',
      lastname: 'lastname',
      middlename: 'middlename',
      phone: '89214206901',
    },
    receiverAddress: {
      street: 'ул. пушкина',
      house: 'д. 67',
      apartment: 'кв 88',
      comment: '',
    },
    status: 1,
    cancellable: true,
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
        name: 'ШИФТ Суприм',
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
        name: 'Маргарита',
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
    _id: crypto.randomUUID(),
    person: {
      firstname: 'firstname',
      lastname: 'lastname',
      middlename: 'middlename',
      phone: '89214206901',
    },
    receiverAddress: {
      street: 'ул. пушкина',
      house: 'д. 67',
      apartment: 'кв 88',
      comment: '',
    },
    status: 2,
    cancellable: true,
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
        name: 'Вегетарианская',
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
        name: 'Четыре Сыра',
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

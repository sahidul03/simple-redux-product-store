import { ADD_PRODUCT, ADD_TO_CARD } from '../constants';


const initialState = {
    products: [
        {
            id: 342343241,
            name: 'iphone 6s',
            price: 42000,
            discount: 2000
        },
        {
            id: 342343242,
            name: 'Samsung Note 5',
            price: 50000,
            discount: 1000
        },
        {
            id: 342343243,
            name: 'Sony XZ premium',
            price: 48000,
            discount: 3000
        },
        {
            id: 342343244,
            name: 'Macbook Pro',
            price: 18000,
            discount: 3000
        },
    ],
    cardItems: [
        {
            quantity: 3,
            product: {
                id: 342343241,
                name: 'iphone 6s',
                price: 42000,
                discount: 2000
            }
        },
        {
            quantity: 2,
            product: {
                id: 342343242,
                name: 'Samsung Note 5',
                price: 50000,
                discount: 1000
            }
        },
        {
            quantity: 5,
            product: {
                id: 342343243,
                name: 'Sony XZ premium',
                price: 48000,
                discount: 3000
            }
        },
        {
            quantity: 1,
            product: {
                id: 342343244,
                name: 'Macbook Pro',
                price: 18000,
                discount: 3000
            }
        },
    ]
};
  
const productStoreApp = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            let items = state.cardItems;
            let updateItem = false;
            items = items.map(item => {
                if (item.product.id === action.payload.id) {
                    updateItem = true;
                    return { quantity: item.quantity + 1, product: item.product };
                }
                return item;
            });
            
            if (!updateItem) {
                items.push({ quantity: 1, product: action.payload });
            }
            return Object.assign({}, state, {
                cardItems: items
            })

        case ADD_PRODUCT:
            return Object.assign({}, state, {
                products: [
                    ...state.products,
                    {
                        id: new Date().valueOf(),
                        name: action.payload.name,
                        price: action.payload.price,
                        discount: action.payload.discount
                    }
                ]
            })
        default:
            return state
    }
}

export default productStoreApp;
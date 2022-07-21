const redux = require('redux');
const GET_ALL_PRODUCT_REQUEST = 'GET_ALL_PRODUCT_REQUEST';
const GET_ALL_NEW_PRODUCT_REQUEST = 'GET_ALL_NEW_PRODUCT_REQUEST';

function getAllProductRequest() {
    return {
        type: GET_ALL_PRODUCT_REQUEST,
        info: 'first redux action'

    }
}

function getAllNewProductRequest() {
    return {
        type: GET_ALL_NEW_PRODUCT_REQUEST,
    }
}

//(previousState, action) => newState

// const initialState = {
//     products: 10,
//     numofNewProducts: 8,
//     loading: false,
//     error: false,
//     message: '',
// }
const initialProductState = {
    products: 10,
}
const initialNewProductState = {
        numofNewProducts: 8,
    }
    // const reducer = (state = initialState, action) => {
    //     switch (action.type) {
    //         case GET_ALL_PRODUCT_REQUEST:
    //             return {
    //                 ...state,
    //                 products: state.products - 1,
    //                 loading: true,
    //             }
    //         case GET_ALL_NEW_PRODUCT_REQUEST:
    //             return {
    //                 ...state,
    //                 numofNewProducts: state.numofNewProducts - 1,
    //                 loading: true,
    //             }
    //         default:
    //             return state;
    //     }
    // }
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                products: state.products - 1,
                loading: true,
            }
        default:
            return state;
    }
}

const newProductReducer = (state = initialNewProductState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                products: state.products - 1,
                loading: true,
            }
        case GET_ALL_NEW_PRODUCT_REQUEST:
            return {
                ...state,
                numofNewProducts: state.numofNewProducts - 1,
                loading: true,
            }
        default:
            return state;
    }
}

//store 
const createStore = redux.createStore(reducer);
console.log("Initial State ", createStore.getState());
const unsubscrube = createStore.subscribe(() => {
    console.log("Store changed ", createStore.getState());
});

createStore.dispatch(getAllProductRequest());
createStore.dispatch(getAllProductRequest());
createStore.dispatch(getAllProductRequest());
createStore.dispatch(getAllNewProductRequest());
createStore.dispatch(getAllNewProductRequest());
unsubscrube();

// node src/actions/index.js
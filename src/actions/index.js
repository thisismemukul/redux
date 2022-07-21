const GET_ALL_PRODUCT_REQUEST = 'GET_ALL_PRODUCT_REQUEST';

function getAllProductRequest() {
    return {
        type: GET_ALL_PRODUCT_REQUEST,
        info: 'first redux action'

    }
}

//(previousState, action) => newState

const initialState = {
    products: 10,
    loading: false,
    error: false,
    message: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                products: state.products + 1,
                loading: true,
            }
        default:
            return state;
    }
}
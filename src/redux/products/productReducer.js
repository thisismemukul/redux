import { ProductConstant } from "./productConstants"
const initialState = {
    products: [],
    numOfProducts: 10,
    loading: false,
    error: false,
    message: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductConstant.GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                numOfProducts: state.numOfProducts - action.payload,
                loading: true,
            }
        default:
            return state;
    }
}

export default productReducer;
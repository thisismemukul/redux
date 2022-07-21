import { ProductConstant } from "./productConstants";
export const GetProductAction = (number = 1) => {
    return {
        type: ProductConstant.GET_ALL_PRODUCT_REQUEST,
        payload: number,
    }
}
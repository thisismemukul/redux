import { ProductConstant } from "./productConstants";
export const GetProductAction = () => {
    return {
        type: ProductConstant.GET_ALL_PRODUCT_REQUEST,
    }
}
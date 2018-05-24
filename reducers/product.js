import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    DELETE_PRODUCT,
    DELETE_SUCCESS,
    DELETE_FAILURE,
    SEARCH_FILTER,
    GET_SEARCH,
    GET_SEARCH_SUCCESS,
    GET_PRODUCTS__DETAILS_FAILURE,
    GET_PRODUCT_DETAILS,
    GET_PRODUCTS_DETAILS_SUCCESS
} from "../actionTypes/product";

export default (prevState = {
    products: [],
    product: {},
    searchProducts: [],
    isLoading: false,
    isRefreshing: false,
    page: 1,
    limit: 8,
    id: -1,
    text: "",
    dataFiltered: []
}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...prevState,
                isLoading: prevState.products.length > 0 ? false : true,
                page: action.page
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                products: prevState.products.concat(action.products)
            }
        case GET_PRODUCT:
            return {
                ...prevState,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                product: action.product
            }
        case ADD_PRODUCT:
            return {
                ...prevState,
                isLoading: true,
                product: action.product
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                product: action.product
            }
        case GET_PRODUCTS_FAILURE:
        case GET_PRODUCT_FAILURE:
        case ADD_PRODUCT_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            }
        case DELETE_PRODUCT:
            return {
                ...prevState,
                isLoading: false,
                id: action.id
            }
        case GET_PRODUCT_DETAILS:
            return {
                ...prevState,
                isLoading: false,
                id: action.id
            }
        case GET_PRODUCTS_DETAILS_SUCCESS:
        console.log("Detail",action.product)
            return {
                ...prevState,
                isLoading: false,
                product: action.product
            }
        case GET_PRODUCTS__DETAILS_FAILURE:
        case DELETE_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                products: prevState.products.filter(data => data.id !== action.id)
            }
        case DELETE_FAILURE:
        case SEARCH_FILTER:
            console.log("test", action.searchData + action.text);
            return {
                ...prevState,
                isLoading: false,
                dataFiltered: action.searchData.filter(filterText => filterText.title.toLowerCase().includes(action.text.toLowerCase()))
            }
        case GET_SEARCH:
            return {
                ...prevState,
                isLoading: prevState.searchProducts.length > 0 ? false : true,
                page: action.page
            }
        case GET_SEARCH_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                searchProducts: prevState.searchProducts.concat(action.searchProducts)
            }
        default:
            return prevState;

    }
}
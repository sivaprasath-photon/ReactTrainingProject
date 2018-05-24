import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    DELETE_PRODUCT,
    DELETE_FAILURE,
    DELETE_SUCCESS,
    SEARCH_FILTER,
    GET_SEARCH,
    GET_SEARCH_SUCCESS,
    GET_PRODUCT_DETAILS,
    GET_PRODUCTS_DETAILS_SUCCESS
} from "../actionTypes/product";

// export const GET_PRODUCTS = 'GET_PRODUCTS'
// export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
// export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

// export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
// export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'

// export const GET_PRODUCT = 'GET_PRODUCT'
// export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
// export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function getProductSuccess(product) {
    return {
        type: GET_PRODUCT_SUCCESS,
        product
    }
}

export function getProductFailure(error) {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function addProductSuccess(product) {
    return {
        type: ADD_PRODUCT_SUCCESS,
        product
    }
}

export function addProductFailure(error) {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    }
}

export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        id
    }
}

export function deleteSuccess(id) {
    return {
        type: DELETE_SUCCESS,
        id
    }
}

export function deleteFailure(error) {
    return {
        type: DELETE_FAILURE,
        error
    }
}

export function getProductDetails(id) {
    return {
        type: GET_PRODUCT_DETAILS,
        id
    }
}

export function getProductDetailsSuccess(product) {
    return {
        type: GET_PRODUCTS_DETAILS_SUCCESS,
        product
    }
}

export function getProductDetailsFailure(error) {
    return {
        type: GET_PRODUCT_DETAILS_FAILURE,
        error
    }
}


export function searchFilter(text,searchData) {
    return {
        type: SEARCH_FILTER,
        text,
        searchData
    }
}

export function getSearch(page, limit) {
    return {
        type: GET_SEARCH,
        page,
        limit
    }
}

export function getSearchSuccess(searchProducts) {
    return {
        type: GET_SEARCH_SUCCESS,
        searchProducts
    }
}
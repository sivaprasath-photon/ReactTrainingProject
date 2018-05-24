import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product"
import {
    GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT,GET_SEARCH,GET_PRODUCT_DETAILS
} from "../actionTypes/product";
import { compose } from "redux";

let URI = "http://172.16.99.242:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* deleteProduct(action) {
    try {
        let products = yield fetch(`${URI}/products/${action.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.deleteSuccess(action.id))
    } catch (error) {
        yield put(actionCreators.deleteFailure(error))
    }
}

function* getSearch(action) {
    try {
        let searchProducts = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getSearchSuccess(searchProducts))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* getProduct(action) {
    try {
        let product = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(actionCreators.getProductDetailsSuccess(product))
    } catch (error) {
        yield put(actionCreators.getProductDetailsFailure(error))
    }
}

function* addProduct(action) {
    try {
        let product = yield fetch(`${URI}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.addProductSuccess(product))
        yield alert("Product Added Successfully")
    } catch (error) {
        yield put(actionCreators.addProductFailure(error))
        yield alert(error)
    }
}

export function* productWatchers() {
    yield takeLatest(GET_PRODUCTS, getProducts)
    yield takeLatest(DELETE_PRODUCT, deleteProduct)
    yield takeLatest(GET_SEARCH,getSearch)
    yield takeLatest(GET_PRODUCT_DETAILS, getProduct)
    yield takeLatest(ADD_PRODUCT,addProduct)
}
import axios from "axios"

const fetchProductsRequest = () => {
     return {
          type: 'FETCH_PRODUCTS_REQUEST'
     }
}

const fetchProductsSuccess = products => {
     return {
          type: 'FETCH_PRODUCTS_SUCCESS',
          payload: products
     }
}

const fetchProductsFailure = error => {
     return {
          type: 'FETCH_PRODUCTS_FAILURE',
          payload: error
     }
}

const fetchProducts = () => {
     return (dispath) => {
          dispath(fetchProductsRequest())
          axios.get('https://fakestoreapi.com/products')
               .then(response => dispath(fetchProductsSuccess(response.data)))
               .catch(error => dispath(fetchProductsFailure(error.message)))
     }
}

export default fetchProducts;
import axios from 'axios'


class Api {
  path: string = 'http://localhost:8080/api'
  getProducts(){
    return axios.get(`${this.path}/products`)
  } 
  getProductDetails(id: string){
    return axios.get(`${this.path}/products/${id}`)
  }
  
  // getProductsDetails = () => {
  //   return axios.get("http://localhost:8080/api/products")
  // }
}

export default new Api()


import axios from 'axios'




export const getAllProduct = async() => {
  try {
    const path = 'http://localhost:8080/api/products'
    const result = await axios.get(path)
    return result.data.product
  }catch(error){
    console.log(error)
  }
}
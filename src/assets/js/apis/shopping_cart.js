import axios from "axios"
import {baseURL}  from "../config.js"
function getCart(){
  return new Promise(function(resolve,reject){
    axios.get(baseURL+"/cart")
    .then(res=>resolve(res.data))
  })
}
export {getCart}
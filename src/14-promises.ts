// Las promesas en ts se manejan de la misma manera que en js
// ts sabe que el tipado es el de una promesa pero no sabe que es lo que va a retornar dicha promesa
// Podemos tipar una promesa con genéricos.

import axios from "axios"


(async () => {

  function delay (time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
    return promise
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products')
    return promise
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    return rta.data
  }

  // console.log('---'.repeat(10));
  // const rta = await delay(3000)
  // console.log(rta);

  const products = await getProducts()
  console.log(products.data);

  const products2 = await getProductsAsync()
  console.log(products2);


})()

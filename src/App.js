import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Routers';
import apiRequestPd from './api/productApi';
import apiRequestCg from './api/categorysApi';
import apiRequestTp from './api/topicApi';
import apiRequestCr from './api/cartApi';
import apiRequestCt from './api/checkoutApi';
import apiRequestDtCt from './api/detailcheckoutApi';


function App() {


  const [product, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequestPd.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);


  const onHandleRemovePd = async (id) => {
    try {
      const { } = await apiRequestPd.remove(id);
      const newProducts = product.filter(products => products.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleAddPd = async (products) => {
    try {
      const newProduct = {
        id: (product.length + 1).toString(),
        ...products
      }
      const { data } = await apiRequestPd.create(newProduct);
      setProducts([
        ...product,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }




  const onHandleUpdatePd = async (updateProduct) => {
    try {
      const { data } = await apiRequestPd.update(updateProduct.id, updateProduct);
      const newProduct = product.map(products => (
        products.id === data.id ? data : products
      ))
      setProducts(newProduct)
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [category, setCategorys] = useState([]);

  useEffect(() => {
    const getCategorys = async () => {
      try {
        const { data } = await apiRequestCg.getAll();
        setCategorys(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategorys();
  }, []);


  const onHandleRemoveCg = async (id) => {
    try {
      const { } = await apiRequestCg.remove(id);
      const newCategorys = category.filter(categorys => categorys.id !== id);
      const newProduct = product.filter(pr => pr.categoryid == id);
      newProduct.map(async (id) => {
        return await apiRequestPd.update(id.id, { ...id, categoryid: "0" })
      })
      setCategorys(newCategorys);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }



  const onHandleAddCg = async (categorys) => {
    try {
      const newCategorys = {
        id: (category.length + 1).toString(),
        ...categorys
      }
      const { data } = await apiRequestCg.create(newCategorys);
      setCategorys([
        ...category,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdateCg = async (updateCategory) => {
    try {
      const { data } = await apiRequestCg.update(updateCategory.id, updateCategory);
      const newCategory = category.map(categorys => (
        categorys.id === data.id ? data : categorys
      ))
      setCategorys(newCategory)
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const { data } = await apiRequestTp.getAll();
        setTopic(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getTopic();
  }, []);


  const onHandleRemoveTp = async (id) => {
    try {
      const { } = await apiRequestTp.remove(id);
      const newTopic = topic.filter(topics => topics.id !== id);
      setTopic(newTopic);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleAddTp = async (topics) => {
    try {
      var today = new Date();
      var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
      const newTopic = {
        id: (topic.length + 1).toString(),
        date: date,
        ...topics
      }
      const { data } = await apiRequestTp.create(newTopic);
      setTopic([
        ...topic,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdateTp = async (updateTopic) => {
    try {
      var today = new Date();
      var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
      const newdateTopic = {
        date: date,
        ...updateTopic
      }
      const { data } = await apiRequestTp.update(newdateTopic.id, newdateTopic);
      const newTopic = topic.map(topics => (
        topics.id === data.id ? data : topics
      ))
      setTopic(newTopic)
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await apiRequestCr.getAll();
        setCart(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCart();
  }, []);


  const onHandleRemoveCr = async (id) => {
    try {
      const { } = await apiRequestCr.remove(id);
      const newCart = cart.filter(carts => carts.id !== id);
      setCart(newCart);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleAddCr = async (id) => {
    try {
      const products = product.filter(pr => pr.id == id);
      products.find(async (id) => {
        const newCart = {
          id: id.id,
          name: id.name,
          image: id.image,
          price: id.price,
          pricesale: id.pricesale,
          amout: "1"
        }
        const { data } = await apiRequestCr.create(newCart);
        setCart([
          ...cart,
          data
        ])
      })
     
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [checkout, setCheckout] = useState([]);

useEffect(() => {
  const getCheckOut = async () => {
    try {
      const { data } = await apiRequestCt.getAll();
      setCheckout(data);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  getCheckOut();
}, []);


  const onHandleCheckOut = async (checkouts) => {
    try {
      const newCheckout = {
        id: (checkout.length + 1).toString(),
        ...checkouts
      }
      const { data } = await apiRequestCt.create(newCheckout);
     
      setCheckout([
        ...checkout,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  const [detailcheckout, setDetailCheckout] = useState([]);

useEffect(() => {
  const getDetailCheckOut = async () => {
    try {
      const { data } = await apiRequestDtCt.getAll();
      setDetailCheckout(data);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  getDetailCheckOut();
}, []);

  return (
    <div className="App">
      <Routers products={product} onRemovePd={onHandleRemovePd} onUpdatePd={onHandleUpdatePd} onAddPd={onHandleAddPd}
        categorys={category} onRemoveCg={onHandleRemoveCg} onUpdateCg={onHandleUpdateCg} onAddCg={onHandleAddCg}
        topics={topic} onRemoveTp={onHandleRemoveTp} onUpdateTp={onHandleUpdateTp} onAddTp={onHandleAddTp}
        carts={cart} onRemoveCr={onHandleRemoveCr} onAddCr={onHandleAddCr} 
        checkouts={checkout} onCheckOut={onHandleCheckOut} detailcheckouts={detailcheckout} />
    </div>
  );
}

export default App;



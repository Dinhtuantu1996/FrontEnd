import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Routers';
import apiRequestPd from './api/productApi';
import apiRequestCg from './api/categorysApi';
import apiRequestTp from './api/topicApi';

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
        id :   (product.length +1).toString(), 
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
      setCategorys(newCategorys);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
    onHandleRemoveCg();
  }

  const onHandleAddCg = async (categorys) => {
    try {
      const newCategorys = {
        id :   (category.length +1).toString(), 
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
      const {  } = await apiRequestTp.remove(id);
      const newTopic = topic.filter(topics => topics.id !== id);
      setTopic(newTopic);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
    onHandleRemoveTp();
  }

  const onHandleAddTp = async (topics) => {
    try {
      var today = new Date();
      var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      const newTopic = {
        id :   (topic.length +1).toString(), 
        date : date,
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
      var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      const newdateTopic = { 
        date : date,
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


  return (
    <div className="App">
      <Routers products={product} onRemovePd={onHandleRemovePd} onUpdatePd={onHandleUpdatePd} onAddPd={onHandleAddPd}
        categorys={category} onRemoveCg={onHandleRemoveCg} onUpdateCg={onHandleUpdateCg} onAddCg={onHandleAddCg}
        topics={topic} onRemoveTp={onHandleRemoveTp} onUpdateTp={onHandleUpdateTp} onAddTp={onHandleAddTp} />
    </div>
  );
}

export default App;



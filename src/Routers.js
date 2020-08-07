import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainAdmin from './page/layout/MainAdmin';
import Main from './page/layout/Main';
import Index from './page/view/Admin/Index';
import Error from './page/view/Admin/Error';
import Product from './page/view/Admin/Product';
import EditProduct from './page/view/Admin/EditProduct';
import MainLogin from './page/view/Main/MainLogin';
import MainRegister from './page/view/Main/MainRegister';
import AddProduct from './page/view/Admin/AddProduct';
import MainIndex from './page/view/Main/MainIndex';
import MainAbout from './page/view/Main/MainAbout';
import MainContact from './page/view/Main/MainContact';
import MainShopping from './page/view/Main/MainShopping';
import MainCart from './page/view/Main/MainCart';
import MainDetail from './page/view/Main/MainDetail';
import MainOrder from './page/view/Main/MainOrder';
import MainCheckOut from './page/view/Main/MainCheckOut';
import Category from './page/view/Admin/Category';
import AddCategory from './page/view/Admin/AddCategory';
import EditCategory from './page/view/Admin/EditCategory';
import DetailProduct from './page/view/Admin/DetailProduct';
import Topic from './page/view/Admin/Topic';
import AddTopic from './page/view/Admin/AddTopic';
import EditTopic from './page/view/Admin/EditTopic';
import MainCategory from './page/view/Main/MainCategory';

const Routers = ({ products, onRemovePd, onAddPd, onUpdatePd
    , categorys, onRemoveCg, onAddCg, onUpdateCg 
    , topics, onRemoveTp, onAddTp, onUpdateTp }) => {


        
    const onHandleRemovePd = (id) => {
        onRemovePd(id)
    }

    const onHandleUpdatePd = (product) => {
        onUpdatePd(product)
       
    }
    const onHandleRemoveCg = (id) => {
        onRemoveCg(id)
    }

    const onHandleUpdateCg = ( category) => {
        onUpdateCg( category)
    }

    const onHandleRemoveTp = (id) => {
        onRemoveTp(id)
    }

    const onHandleUpdateTp = ( topic) => {
        onUpdateTp( topic)
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Index />
                            </Route>
                            <Route path='/admin/products' >
                                <Product products={products} onRemovePd={onHandleRemovePd} />
                            </Route>
                            <Route path='/admin/add'>
                                <AddProduct categorys={categorys} onAddPd={onAddPd} />
                            </Route>
                            <Route path='/admin/detailproduct/:id'>
                                <DetailProduct products={products} />
                            </Route>
                            <Route path="/admin/edit/:id" >
                                <EditProduct categorys={categorys} products={products} onUpdatePd={onHandleUpdatePd} />
                            </Route>
                            <Route path='/admin/category' >
                                <Category category={categorys} onRemoveCg={onHandleRemoveCg} />
                            </Route>
                            <Route path='/admin/addcategory'>
                                <AddCategory onAddCg={onAddCg} />
                            </Route>
                            <Route path="/admin/editcategory/:id" >
                                <EditCategory category={categorys}  onUpdateCg={onHandleUpdateCg} />
                            </Route>
                            <Route path='/admin/topic' >
                                <Topic topics={topics} onRemoveTp={onHandleRemoveTp} />
                            </Route>
                            <Route path='/admin/addtopic' >
                                <AddTopic onAddTp={onAddTp} />
                            </Route>
                            <Route path="/admin/edittopic/:id" >
                                <EditTopic topics={topics}  onUpdateTp={onHandleUpdateTp} />
                            </Route>
                            <Route>
                                <Error />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route path="/:path?/:path?" exact>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <MainIndex />
                            </Route>
                            <Route path="/login">
                                <MainLogin />
                            </Route>
                            <Route path="/register">
                                <MainRegister />
                            </Route>
                            <Route path="/about" exact>
                                <MainAbout />
                            </Route>
                            <Route path="/contact" exact>
                                <MainContact />
                            </Route>
                            <Route path="/shopping" exact>
                                <MainShopping products={products} />
                            </Route>
                            <Route path="/category" exact>
                                <MainCategory  />
                            </Route>
                            <Route path="/cart" exact>
                                <MainCart />
                            </Route>
                            <Route path="/order" exact>
                                <MainOrder />
                            </Route>
                            <Route path="/checkout" exact>
                                <MainCheckOut />
                            </Route>
                            <Route path="/detail/:id">
                                <MainDetail products={products} />
                            </Route>
                            <Route>
                                <Error />
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dataFake from './dataFake';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainAdmin from './page/layout/MainAdmin';
import Main from './page/layout/Main';
import Index from './page/view/Admin/Index';
import Error from './page/view/Admin/Error';
import Product from './page/view/Admin/Product';
import DetailProduct from './page/view/Admin/DetailProduct';
import MainLogin from './page/view/Main/MainLogin';
import MainRegister from './page/view/Main/MainRegister';
import AddProduct from './page/view/Admin/AddProduct';
import MainIndex from './page/view/Main/MainIndex';
import MainAbout from './page/view/Main/MainAbout';
import MainContact from './page/view/Main/MainContact';
import MainShopping from './page/view/Main/MainShopping';
import MainCart from './page/view/Main/MainCart';

const Routers = ({ products }) => {

    const [product, setProduct] = useState(dataFake)

    const onHandleRemove = (id) => {
        const newProduct = product.filter(product => product.id !== id);
        setProduct(newProduct);
    }

    const onHandleAdd = (products) => {
        const newProduct = {
            id: product.length + 1,
            ...products
        }
        setProduct([
            ...product, newProduct
        ])
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Index />
                            </Route>
                            <Route path='/admin/products'>
                                <Product products={product} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/add'>
                                <AddProduct onAdd={onHandleAdd} />
                            </Route>
                            <Route path="/admin/product&:id">
                                <DetailProduct products={product} />
                            </Route>
                            <Route>
                                <Error />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
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
                                <MainShopping products={product} />
                            </Route>
                            <Route path="/cart" exact>
                                <MainCart />
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

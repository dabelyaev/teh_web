import React, { useEffect} from 'react'
import {  Layout } from 'antd'

import CardCustom from './components/CardCustom/CardCustom'
import { Route, Switch } from 'react-router-dom'
import CardMore from './components/CardCustom/CardMore'
import { observer } from 'mobx-react'

import NewMenuCustom from "./components/Layout/NewMenuCustom";
import HeaderCustom from "./components/Layout/HeaderCustom";
import ContentCustom from "./components/Layout/ContentCustom";
import LoginPage from "./components/CardCustom/Login";
import {useRootStore} from "./mst/stores/RootStore.store";

const { Footer } = Layout

const App: React.FC = observer(() => {

    const { fetchProducts, products, haveProducts, postsCount , selected_product} = useRootStore()

    useEffect(() => {
        fetchProducts()
    }, [])


    console.log('>>selected_product', selected_product)

    return (
        <Layout style={ { minHeight: '100vh' } }>
            <NewMenuCustom/>
            <Layout className="site-layout">
                <HeaderCustom/>
                <ContentCustom>

                    <Switch>
                        <Route exact={ true } path={ '/login' }>

                            <LoginPage/>
                        </Route>
                        <Route exact={ true } path={ '/' }>
                            <div
                                className={ 'bg-red-500' }>
                                main
                            </div>

                        </Route>
                        <Route exact={ true } path={ '/content' }>
                            <div>
                                Posts: { postsCount }
                                { !haveProducts ? <div>No posts</div> : (
                                    products.map((post) => {
                                        return (
                                            <CardCustom item={post} />
                                        )

                                    })
                                ) }
                            </div>
                        </Route>

                        <Route path={ '/content/:id' }
                               children={ (history) => <CardMore /> }/>

                    </Switch>

                </ContentCustom>
                <Footer style={ { textAlign: 'center' } }>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>


        </Layout>
    )
})
export default App
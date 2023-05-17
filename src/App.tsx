import React, { useEffect } from 'react'
import {  Layout } from 'antd'





import { observer } from 'mobx-react'
import { useRootStore } from './mst/stores/RootStore.store'
import NewMenuCustom from "./components/Layout/NewMenuCustom";
import HeaderCustom from "./components/Layout/HeaderCustom";

import ContentCustom from "./components/Layout/ContentCustom";


import Login from "./components/CardCustom/Login";

const { Footer } = Layout

const App: React.FC = observer(() => {

    const { fetchProducts, products, haveProducts, postsCount } = useRootStore()

    useEffect(() => {
        fetchProducts()
    }, [])




    return (
        <Layout style={ { minHeight: '100vh' } }>
            <NewMenuCustom/>
            <Layout className="site-layout">
                <HeaderCustom/>
                <ContentCustom/>

                   {/* <Switch>

                        <Route exact={ true } path={ './components/CardCustom/Login' }>
                            <div> <Login/></div>

                        </Route>
                        <Route exact={ true } path={ '/' }>
                            <div
                                className={ 'bg-red-500' }>
                                main
                            </div>

                        </Route>
                        <Route exact={ true } path={ '/conntent' }>
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

                    </Switch>*/}

                <Login/>
                <Footer style={ { textAlign: 'center' } }>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>


        </Layout>
    )
})

export default App
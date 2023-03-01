import React, { useState } from 'react';
import {  Layout} from 'antd';
import HeaderCustom from "./components/Layout/HeaderCustom";
import ContentCustom from "./components/Layout/ContentCustom";
import NewMenuCustom from "./components/Layout/NewMenuCustom";

const {Footer } = Layout;



const App: React.FC = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
           <NewMenuCustom/>
            <Layout className="site-layout">
                <HeaderCustom/>
                <ContentCustom/>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
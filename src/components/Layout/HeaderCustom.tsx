import React from 'react'
import { Header } from 'antd/es/layout/layout'
import { theme } from 'antd'

const HeaderCustom = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: colorBgContainer }} />
    )
}

export default HeaderCustom
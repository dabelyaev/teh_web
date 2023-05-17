import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import Sider from 'antd/es/layout/Sider'

import { useHistory } from 'react-router-dom'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}


// const items: MenuItem[] = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];


const SideMenuCustom = () => {

    let history = useHistory()


    const items: MenuItem[] = [ {
        label: 'Home',
        key: 0,
        onClick: () => history.push('/'),


    },
        {
            label: 'Content',
            key: 1,
            onClick: () => history.push('/content'),
        },
        {
            label: 'Login',
            key: 2,
            onClick: () => history.push('/login'),
        },
    ]

    const [ collapsed, setCollapsed ] = useState(false)

    return (
        <Sider collapsible collapsed={ collapsed } onCollapse={ (value) => setCollapsed(value) }>
            <div style={ { height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' } }/>
            <Menu theme="dark" defaultSelectedKeys={ [ '1' ] } mode="inline" items={ items }
            />
        </Sider>
    )
}

export default SideMenuCustom
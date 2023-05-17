import { Button, Input } from 'antd'
import React from 'react'

import { observer } from 'mobx-react'
import {useRootStore} from "../../mst/stores/RootStore.store";

const LoginPage = observer(() => {

    const { loginPage: { password, onChangeUsername, onChangePassword, saveOnStorage } } = useRootStore()

    const store = useRootStore();


    return (
        <div className={ 'flex flex-col space-y-3' }
        >
            <span className={ 'flex justify-center text-xl' }>Login form</span>
            <Input placeholder={ 'Username' } value={ store.loginPage.username}
                   onChange={ (e) => onChangeUsername(e.target.value) }/>
            <Input placeholder={ 'Password' } value={ password }
                   onChange={ (e) => onChangePassword(e.target.value) }/>

            <Button onClick={ () => saveOnStorage() }> Log in  </Button>
        </div>
    )
})

export default LoginPage
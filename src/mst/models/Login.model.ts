import { types } from 'mobx-state-tree'
import { registered_users } from '../../mock/users'



export const LoginModel = types.model('LoginModel', {
    username: '',
    password: types.optional(types.string, ''),
}).actions((self) => ( {
    onChangeUsername(value: string) {
        self.username = value
    },
    onChangePassword(value: string) {
        self.password = value
    },


    saveOnStorage() {
        const user = registered_users.find((user: any) => {
            return user.username === self.username && user.password === self.password
        })


        if (user?.id) {
            localStorage.setItem(String(user.id), JSON.stringify(user))
        }

        alert('User saved on storage')
    }

} ))

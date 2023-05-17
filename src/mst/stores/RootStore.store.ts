import { applySnapshot, flow, toGenerator, types } from 'mobx-state-tree'
import { LoginModel } from '../models/Login.model'
import { ProductsModel } from '../models/Products.model'
import { createContext, useContext } from 'react'
import { IProductModel, IProductModelSnapshotIn, IRootStore } from '../interfaces'


export const RootStore = types.model('RootStore', {
    loginPage: types.optional(LoginModel, {}),

    products: types.array(ProductsModel),

    selected_product: types.safeReference(ProductsModel),

}).views((self) => ( {
    get haveProducts() {
        return !!self.products.length
    },

    get postsCount() {
        return self.products.length
    },
} )).actions((self) => ( {

    resetSelectedProduct() {
        self.selected_product = undefined
    },

    selectProductById(id: number) {
        self.selected_product = self.products.find((product) => product.id === id)
    },
    //
    // removeProductById(id: number){
    //     const _products = self.products.filter((product) => product.id !== id)
    //     applySnapshot(self.products, _products)
    //
    //
    // },

    removeProductAsRefference(item: IProductModel) {
        // applySnapshot(self.selected_product, item)
        self.selected_product = item

        console.log('>>reff', self.selected_product)

    },


    fetchProducts: flow(function * () {
        try {

            const products: IProductModelSnapshotIn[] = yield * toGenerator(fetch('https://dummyjson.com/products').then((res) => res.json()).then((res) => res.products))

            applySnapshot(self.products, products)

        } catch (e) {
            console.log('>>e', e)
        }
    }),

} ))

export const store = RootStore.create({})


export const ContextRootStore = createContext<IRootStore>(store)

export const useRootStore = () => useContext(ContextRootStore)
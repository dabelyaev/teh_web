import { cast, getParent, getParentOfType, types } from 'mobx-state-tree'

import { RootStore } from '../stores/RootStore.store'

export const ProductsModel = types.model('ProductsModel', {
    id: types.identifierNumber,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',

    images: types.array(types.string),

}).actions((self) => ( {
    selectProduct() {
        const res =  getParent(self, 2)
        const removeProductAsRefference = getParentOfType(self, RootStore).removeProductAsRefference
        removeProductAsRefference(cast(self))
    },
} ))

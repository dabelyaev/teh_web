import { Card } from 'antd'

import Meta from 'antd/es/card/Meta'
import { observer } from 'mobx-react'
import { useRootStore } from '../../mst/stores/RootStore.store'

const CardMore = observer(() => {
    const {selected_product} = useRootStore()

    if(!selected_product) return (
        <div>
            no post data
        </div>
    )

    return (
        <Card
            cover={
                <img
                    alt={selected_product.title}
                    src={selected_product.thumbnail}
                />
            }
        >

            <Meta
                title="Card title"
                description={selected_product.description}
            />

        </Card>
    )
})

export default CardMore
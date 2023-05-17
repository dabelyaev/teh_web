
import { Card } from 'antd'
import styles from './Style.module.scss'
import { useHistory } from 'react-router-dom'
import { useRootStore } from '../../mst/stores/RootStore.store'
import { observer } from 'mobx-react'
import { IProductModel } from '../../mst/interfaces'

const CardCustom = observer(({ item } : {item: IProductModel}) => {
    const { selectProductById } = useRootStore()
    let history = useHistory()
    const { id, title, description } = item

    return (
        <Card title={ title } bordered={ false } className={ styles['wrapper'] } onClick={ () => {
            selectProductById(id)
            item.selectProduct()
            history.push(`/content/${ id }`)
        }
        }>

            <img src={item.thumbnail}/>
            { description }
        </Card>
    )
})

export default CardCustom
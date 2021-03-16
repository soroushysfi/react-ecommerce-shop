import { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection/collection.component'

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                     <CollectionPreview key={id} {...otherCollectionProps}/>
                      ))
            }

        </div>
    )
}

export default ShopPage;

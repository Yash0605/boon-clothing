import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop'>
                {collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                ))}
            </div>
        )
    }
}

export default ShopPage;
import { PRODUCTS } from '../../products.js'
import MerchCard from '../../components/MerchCard.jsx'

export default function Shop() {
    return (
    <div className='merch-area'>    
        <h2 className='merch-category-title'>Наушники</h2>
        <div className='merch-container'>
            {PRODUCTS.map(product => <MerchCard data={product}/>)}
        </div>  
    </div>
    );
}
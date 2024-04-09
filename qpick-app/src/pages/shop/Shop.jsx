import { PRODUCTS } from '../../products.js'
import MerchCard from '../../components/MerchCard.jsx'

export default function Shop() {

    // Let's assume we got dictionary of categories out of DB
    const categories = {
        "headphone": "Наушники",
        "wireless-headphone": "Безпроводные наушники",
    };


    // Filters cards to be under their respected category such as Наушники, Безпроводные наушники
    // Sends HTML as output
    function outputProducts() {

        const returnList = [];
        for (let category in categories) {

            const filteredProducts = PRODUCTS.filter(product => product.category === category);

            // Category title
            returnList.push(<h2 className='merch-category-title'>{categories[category]}</h2>);
            
            // All product cards of that category
            returnList.push(
                <div className='merch-container'>
                    {filteredProducts.map((product, id) => <MerchCard key={id} data={product}/>)}
                </div>);
        }
        return returnList;
    }

    return (
    <div className='merch-area'>
        {outputProducts()}
    </div>
    );
}
import { PRODUCTS } from '../../../products.js'
import MerchCard from '../../../components/MerchCard.jsx'
import styles from './categoryitem.module.css'

export default function CategoryItem({category}) {
    
    return <div className={styles.merchArea}>
        <h2 className={styles.title}>
            {category.nameRU}
        </h2>

        <div className={styles.container}>
            {
                PRODUCTS
                .filter(product => product.category === category.name)
                .map((product) => <MerchCard key={product.id} data={product}/>)
            }
        </div>
    </div>
}
import Categories from './components/Categories.jsx'

export default function Shop() {

    // Let's imagine we acquired categories from the database 
    const categoryList = [
        {
            "id": 1,
            "name": "headphones",
            "nameRU": "Наушники"
        },
        {
            "id": 2,
            "name": "wireless-headphones",
            "nameRU": "Беспроводные наушники"  
        }
    ];

    return <Categories categoryList={categoryList}/>;
}
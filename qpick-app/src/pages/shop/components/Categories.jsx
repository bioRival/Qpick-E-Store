import CategoryItem from "./CategoryItem";

export default function Categories({categoryList}) {
    return(<>
        {categoryList.map(category => (
            <CategoryItem key={category.id} category={category}/>
        ))}
    </>);
}
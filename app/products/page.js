import Recepies from "../components/Recepies";

const url = 'https://dummyjson.com/recipes'
const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data
}
const ProductsPage = async () => {
    const data = await fetchData();
    return (
        <div><Recepies recipes={data.recipes} /></div>
    )
}

export default ProductsPage
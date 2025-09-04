const PRODUCT_URL = 'https://fakestoreapi.com/products';

// const getProducts = (url)=> {
//     fetch(url)
//     .then((response) => (response.json()))
//     .then((data) => {console.log(data);})
//     .then((error) => {console.log(error);})
// };

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayProducts()
    } catch (error) {
        console.log('Error fetching products:', error);
    }
}

getProducts(PRODUCT_URL);

const displayProducts = (products) => {
    products.forEach((product) => {
        const {image, title, price} = product;
    })
}
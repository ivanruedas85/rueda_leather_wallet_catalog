// filepath: c:\Users\Ivan Rueda\Documents\Github\Astro\rueda_leather_wallet_catalog\src\utils\categoryUtils.js
import Products from '../data/products.json';

export function getCategoryData() {
    const { products } = Products;
    const categories = [...new Set(products.map((product) => product.category))];

    return categories.map((category) => ({
        params: { category: category.toLowerCase().replace(/\s+/g, '-') },
        props: { category, products: products.filter((p) => p.category === category) },
    }));
}
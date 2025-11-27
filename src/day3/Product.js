import React from 'react'
import ProductCard from './ProductCard';

const Products = () => {
    const Products = [
        {id:1, title:'마우스', price:15000 },
        {id:2, title:'키보드', price:30000 },
        {id:3, title:'헤드셋', price:45000 }
    ];
    return (
    <div className='product'>
        <ProductCard 
        // title={Products[0].title}
        // price={Product[0].price}
        {
            products.map((item)=>{
                return <ProductCard title={item.title} price={item.price}
            })
        }
        />
    </div>
    )
}

export default Product;
import React, { useState } from 'react'

export default function Shopy() {
    const products = [
        {
            id: 1,
            name: "iPhone 17 pro",
            category: "Mobile",
            price: 80000,
            rating: 4.8,
        },
        {
            id: 2,
            name: "Samsung Galaxy S24",
            category: "Mobile",
            price: 70000,
            rating: 4.6,
        },
        {
            id: 3,
            name: "Realme X3",
            category: "Mobile",
            price: 30000,
            rating: 4.4,
        },
        {
            id: 4,
            name: "Lenovo idea pad gaming 3",
            category: "Laptop",
            price: 62000,
            rating: 4.8,
        },
        {
            id: 5,
            name: "MacBook",
            category: "Laptop",
            price: 120000,
            rating: 4.9,
        },
        {
            id: 6,
            name: "Boat Headphones",
            category: "Accessories",
            price: 2500,
            rating: 4.1,
        },
        {
            id: 7,
            name: "Apple Watch",
            category: "Accessories",
            price: 35000,
            rating: 4.7,
        },
    ];

    const [searchValue, setSearchValue] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");

    const filteredProducts = products.filter((product) => {
        const matchSearch = product.name

        .toLowerCase()
        .includes(searchValue.toLowerCase());

        const matchCategory = filterCategory === "All" || product.category === filterCategory;

        return matchSearch && matchCategory;
    })

    return (
        <div className="container">
            <h1>Product Search & Filter</h1>
            <div className="controls">
                <input type="text"
                placeholder='Search Products'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}/>

                <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}>
                    
                    <option value="All">All</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Accessories">Accessories</option>

                </select>
            </div>

            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="card" key={product.id}>
                            <h2>{product.name}</h2>

                            <p><strong>Category:</strong> {product.category} </p>

                            <p><strong>Price:</strong> ₹ {product.price} </p>

                            <p><strong>Rating:</strong> ⭐ {product.rating} </p>
                        </div>
                    ))
                ):(
                    
                    <h2 className="no-data">No Products Found</h2>

                )}
            </div>
        </div>
    );
}

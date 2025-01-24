import React from 'react';
import './CategoryList.css';

const CategoryList = ({ onSelectCategory }) => {
    const categories = [
        'Street photography Category',
    ];

    return (
        <div className="category-list">
            <h3>Categories</h3>
            {categories.map((category) => (
                <div key={category} className="category" onClick={() => onSelectCategory(category)}>
                    {category}
                </div>
            ))}
        </div>
    );
};

export default CategoryList;

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
};

export const getProductById = async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`);
    return response.json();
};

export const getCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    return response.json();
};

export const addProduct = async (product) => {
    const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    return response.json();
};

export const updateProduct = async (id, product) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    return response.json();
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};

export const createOrder = async (order) => {
    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
    return response.json();
};

export const getOrderById = async (id) => {
    const response = await fetch(`${API_URL}/orders/${id}`);
    return response.json();
};

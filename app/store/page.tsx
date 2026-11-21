'use client'

import { useState, useEffect} from 'react'

type Product = {
    id: number
    title: string
    image: string
    price: number
}

export default function StorePage(){
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState<Product[] | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();

        fetch('https://fakestoreapi.com/products', { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Product request failed (${response.status})`)
                }
                return response.json()
            })
            .then((data: Product[]) => {
                setProducts(data)
            })
            .catch((reason: Error) => {
                if(!controller.signal.aborted){
                    setError(reason.message)
                }
            })

        return () => controller.abort()

    }, [])

    const query = search.toLowerCase()
    const filteredProducts = (products ?? []).filter((product) => product.title.toLowerCase().includes(query))

    return (
        <main> 
            <h1>Store</h1>
            <label htmlFor="search">Search for a product: </label>
            <input
                id = "product-search"
                type = "search"
                value = {search}
                onChange = {(event) => setSearch(event.target.value)}
            />
            {error && <p role="alert">{error}</p>}
            {!error && products === null && <p>Loading products…</p>}
            {products !== null && filteredProducts.length === 0 &&(<p>No matching Products</p>)}

            <table> 
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img src = {product.image} alt = {product.title} style = {{ width: 64, height: 64, objectFit: 'contain'}}/>
                            </td>
                            <td>{product.title}</td>
                            
                            <td>${product.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
import ProductCard from "~/components/product-card"
export default function Marketplace() {
    const items = [
        {
            id: "sdfgsdf",
            name: "Calvin Klein",
            description: "Plain Short Sleeve T Shirt great for product mockup photos",
            price: 9999,
            image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            quantity: 4,
        },
        {
            id: "sdfgsdf",
            name: "H&M",
            description: "Plain Short Sleeve T Shirt great for product mockup photos",
            price: 7999,
            image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            quantity: 4,
        },
        {
            id: "sdfgsd",
            name: "Pull&Bear",
            description: "Plain Short Sleeve T Shirt great for product mockup photos",
            price: 3999,
            image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            quantity: 0,
        },
    ]
    return (
        <div>
            {items.map((item, index) => (
                <ProductCard key={index} {...item} />
            ))}
        </div>
    )
}

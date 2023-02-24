import { ProductCardProps } from "./types"
export default function ProductCard({ id, name, description, image, price, quantity }: ProductCardProps) {
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={image} alt='Product' />
            </div>
            <div className='product-text'>
                <div className='buy-btn buy-btn--green'>
                    <span className='buy-btn__txt'>Buy</span>
                </div>
                <div className='name'>
                    <h3>{name} </h3>
                </div>
                <div className='description'>
                    <p>{description}</p>
                </div>
                <div className='footer-card'>
                    <div className='wcf-left'>
                        <span className='price'>Rsd {price} </span>
                    </div>
                    <div className='wcf-right'>
                        <button disabled={quantity ? false : true} className='available-btn'>
                            {quantity ? "Available" : "Sold"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import SlickSlider from "react-slick"
import { TourCardProps } from "./types"

export default function TourCard({ id, name, description, images, price, time }: TourCardProps) {
    return (
        <div className='product'>
            <SlickSlider
                {...{
                    dots: true,
                    fade: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }}
                arrows={false}
                className='tour-img'
            >
                {images.map((src, index) => (
                    <div key={index} className='tour-img'>
                        <img src={src} alt='Tour' />
                    </div>
                ))}
            </SlickSlider>
            <div className='tour-text'>
                <div className='buy-btn buy-btn--green'>
                    <span className='buy-btn__txt'>Buy</span>
                </div>
                <div className='tour-name'>
                    <h3>{name} </h3>
                </div>
                <div className='tour-description'>
                    <p>{description}</p>
                </div>
                <div className='footer-card'>
                    <div className='wcf-left'>
                        <span className='price'>Rsd {price} </span>
                    </div>
                    <div className='wcf-right'>
                        <button className='available-btn'>{time}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../ProductCard';
import { getDecimal } from '@/app/utils/getDecimal';
import { NextButton, PrevButton } from './SwiperButton';

export default function NewSwiper({discount} : {discount : any}) {
  const settings = {
    dots: true,
    speed: 300,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    draggable: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />
  };
  return (
    <div className="slider-container w-11/12 m-auto">
      <Slider {...settings}>
        {
            discount.map((product, index) => {
                return (
                    <div>
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={getDecimal(product.price, product.discount)}
                            img={product.img}
                            rating={product.rating}
                            originalPrice={getDecimal(product.price)}
                            href={product.href}
                        />
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
}
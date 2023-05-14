import {Carousel,Button} from 'react-bootstrap';
import { useState } from 'react';
import './corousel.css'

function Caarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
          caption:"about first slide"
        },
        {
            caption:"about second slide",
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
        caption:"about third slide",
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
            caption:"about fourth slide",
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            caption:"about fifth slide",
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];
    
  return (
    <div class="carousel-images">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {slides.map((images)=>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100 "
          src={slides[index].url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{index} slide label</h3>
          <p>{slides[index].caption}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
    </div>
    );
}

export default Caarousel;
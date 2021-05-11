import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//Avaters imported
import avatar1 from '../images/avatars/avatar-1.png'
import avatar2 from '../images/avatars/avatar-2.png'
import avatar3 from '../images/avatars/avatar-3.png'
import avatar4 from '../images/avatars/avatar-4.png'

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John H." />
        <div className="myCarousel">
          <h3>John H.</h3>
          <p>
            Occaecat eiusmod labore adipisicing proident voluptate do aliquip.
            Qui cupidatat et voluptate ea elit exercitation duis deserunt anim
            est deserunt ullamco.{' '}
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Mary B." />
        <div className="myCarousel">
          <h3>Mary B.</h3>
          <p>
            Occaecat eiusmod labore adipisicing proident voluptate do aliquip.
            Qui cupidatat et voluptate ea elit exercitation duis deserunt anim
            est deserunt ullamco. Sunt Lorem id enim duis dolore enim ullamco
            magna. Anim et eu sint incididunt elit.{' '}
          </p>
        </div>
      </>

      <>
        <img src={avatar3} alt="Bill O." />
        <div className="myCarousel">
          <h3>Bill O.</h3>
          <p>
            Occaecat eiusmod labore adipisicing proident voluptate do aliquip.
            Qui{' '}
          </p>
        </div>
      </>

      <>
        <img src={avatar4} alt="Ralph S." />
        <div className="myCarousel">
          <h3>Ralph S.</h3>
          <p>
            Occaecat eiusmod labore adipisicing proident voluptate do aliquip.
            Qui cupidatat et voluptate ea elit exercitation duis deserunt anim
            est deserunt ullamco. Sunt Lorem id enim duis dolore enim ullamco
            magna. Anim et eu sint incididunt elit.{' '}
          </p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel

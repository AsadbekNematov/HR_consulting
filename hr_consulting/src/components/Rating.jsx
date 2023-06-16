import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles, { layout } from '../style';
import { card, rating2 } from '../assets';
import Button from './Button';

const Rating = () => (
  <section className={`${layout.section} flex flex-row relative h-full`}>
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      emulateTouch={true}
      selectedItem={1}
      autoPlay={true} // Add this line to enable auto play
      interval={2000} // Optional: Adjust this value to change the slide interval (in milliseconds)
      className="relative h-full"
      renderArrowPrev={(onClickHandler, hasPrev, label) => 
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 text-4xl text-white bg-black p-2 rounded-full">
            ‹
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label} className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 text-4xl text-white bg-black p-2 rounded-full">
            ›
          </button>
        )
      }
    >
      <div className="flex card3 flex-col">
        <div className={layout.sectionImg}>
          <img src={rating2} alt="card" className="w-[10%] relative z-[5]" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Xodimlarni Tekshirish <br className="sm:block hidden" />
            va Baholash.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Rivojlanish bo'yicha tavsiyalar bilan xodimlarni baholash tizimi.
          </p>
          <Button styles="mt-10" />
        </div>
      </div>

      <div className="flex card1 flex-col">
        <div className={layout.sectionImg}>
          <img src={rating2} alt="card" className="w-[100px] relative z-[5]" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Xodimlarni Tekshirish <br className="sm:block hidden" />
            va Baholash.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Rivojlanish bo'yicha tavsiyalar bilan xodimlarni baholash tizimi.
          </p>
          <Button styles="mt-10" />
        </div>
      </div>

      <div className="flex card2 flex-col">
        <div className={layout.sectionImg}>
          <img src={rating2} alt="card" className="w-[10%] relative z-[5]" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Xodimlarni Tekshirish <br className="sm:block hidden" />
            va Baholash.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Rivojlanish bo'yicha tavsiyalar bilan xodimlarni baholash tizimi.
          </p>
          <Button styles="mt-10" />
        </div>
      </div>
    </Carousel>
  </section>
);

export default Rating;

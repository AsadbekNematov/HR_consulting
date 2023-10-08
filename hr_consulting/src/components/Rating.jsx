import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles, { layout } from "../style";
import { card, rating2, hiring2, teaching2 } from "../assets";
import Button from "./Button";

const Rating = () => (
  <section className={`flex flex-col pt-2 relative h-full`}>
    <div className="absolute z-[3] left-[100%] -top-80 w-[50%] h-[50%] rounded-full white__gradient " />
    <div className="absolute z-[0] top-16 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient " />

    <div className={`${layout.sectionInfo} pt-0 pb-2.5 items-center`}>
      <h2 className={`${styles.heading2} text-center`}>
        Bizning HR Xizmatlarimiz
        {/* <br className='sm:block hidden'/> billing & invoicing. */}
      </h2>
      <p
        className={`font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] text-center w-full p mb-5`}
      >
        Lorem impsum amament
      </p>
    </div>
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      emulateTouch={true}
      selectedItem={1}
      autoPlay={true} // Add this line to enable auto play
      interval={1500} // Optional: Adjust this value to change the slide interval (in milliseconds)
      className="relative h-full max-w-[100%]"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 text-4xl text-main p-2 rounded-full"
          >
            ‹
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 text-4xl text-main p-2 rounded-full"
          >
            ›
          </button>
        )
      }
    >
      <div id="product" className={`${layout.section} py-0 items-center	`}>
        <div className={layout.sectionImgReverse}>
          <img src={hiring2} alt="billing" className="w-[72%] relative z-[5]" />
        </div>
        <div className={`${layout.sectionInfo} pt-0 pb-2.5 items-center	`}>
          <h2 className={styles.heading2}>
            Xodimlarni Yollash.
            {/* <br className='sm:block hidden'/> billing & invoicing. */}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Biz mijoz bilan yaqin hamkorlikda loyiha boʼyicha ishlarning toʼliq
            siklini amalga oshiramiz.
          </p>
          <div className="flex align-center flex-row flex-wrap justify-center w-full sm:mt-10 mt-6">
            <Button />
          </div>
        </div>
      </div>
      <div id="product" className={`${layout.section} py-0 items-center	`}>
        <div className={layout.sectionImgReverse}>
          <img
            src={rating2}
            alt="billing"
            className="!w-[75%] relative z-[5]"
          />
        </div>
        <div className={`${layout.sectionInfo} pt-0 pb-2.5 items-center	`}>
          <h2 className={styles.heading2}>
            Xodimlarni Tekshirish
            <br className="sm:block hidden" /> va Baholash.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Rivojlanish bo'yicha tavsiyalar bilan xodimlarni baholash tizimi.
          </p>
          <div className="flex flex-row w-full justify-center flex-wrap sm:mt-10 mt-6">
            <Button />
          </div>
        </div>
      </div>
      <section id="product" className={`${layout.section} py-0 items-center	`}>
        <div className={layout.sectionImgReverse}>
          <img
            src={teaching2}
            alt="billing"
            className="w-[88%] relative z-[5]"
          />
        </div>
        <div className={`${layout.sectionInfo} pt-0 pb-2.5 items-center	`}>
          <h2 className={styles.heading2}>
            Kadrlar Tayyorlash
            {/* <br className='sm:block hidden'/> billing & invoicing. */}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Kompaniyada treninglar va mutaxassislarni tayyorlash.
          </p>
          <div className="flex flex-row w-full justify-center flex-wrap sm:mt-10 mt-6">
            <Button />
          </div>
        </div>
      </section>
    </Carousel>
  </section>
);

export default Rating;

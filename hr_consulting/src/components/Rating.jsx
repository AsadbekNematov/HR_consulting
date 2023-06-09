import React from 'react';
import styles, {layout} from '../style';
import { card, rating2 } from '../assets';
import Button from './Button';

const Rating = () =>(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Xodimlarni Tekshirish <br className='sm:block hidden' />va Baholash.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Rivojlanish bo'yicha tavsiyalar bilan xodimlarni baholash tizimi.
      </p>
    <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={rating2} alt="card" className='w-[55%]' />
    </div>
  </section>
)

export default Rating
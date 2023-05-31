import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter}`} id='clients'>
    {/*To DO*/}
    <div />

    <div className='w-full flex flex-col justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1]'>
      <h1>
        What people are <br className='sm:block hidden' />
        saying about us.
      </h1>
    </div>
  </section>
)

export default Testimonials
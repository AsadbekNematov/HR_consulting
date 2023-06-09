import React from 'react';
import { apple, bill, google, teaching2 } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const Teaching = ()=>(
<section id='product' className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <img src={teaching2} alt="billing" className='w-[100%] relative z-[5]' />

    <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient '/>
    <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient '/>
  </div>

  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
    Xodimlarni Yollash
    {/* <br className='sm:block hidden'/> billing & invoicing. */}
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Mijoz bilan yaqin hamkorlikda loyiha ustida ishlashning to'liq tsiklini amalga oshiramiz.  
    </p>
    <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
    <Button/>

    </div>
  </div>
</section>
  )

export default Teaching
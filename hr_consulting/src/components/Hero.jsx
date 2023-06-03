import styles from '../style'; 
import {discount, consult} from '../assets';
import GetStarted from './GetStarted';

const Hero = () =>
(
  <section id='home' className={`flex lg:flex-row lg:pt-0 flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>20% </span>
          Discount For {" "}
          <span className='text-white'>1 Month </span>
          Account 
        </p>
      </div> */}
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] '>
        Biz Sizning <br className='sm:block hidden' /> {" "}
          <span className='text-gradient '>Yutuqingiz </span>{" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 pl-10'>
          <GetStarted />
        </div>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
      Uchun Ishlaymiz.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Sizning biznesingizni o'ziga xosligi tufayli, sizning HR yechimlaringiz ham shunday bo'lishi kerak. Biz sizning tashkilot ehtiyojlariga mos keladigan HR strategiyalarni ishlab chiqamiz.
      </p>
    </div>

    <div className={`relative flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
      <img src={consult} alt="billing" className=' w-[100%] h-auto relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] right-0 top-30 pink__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%] right-90 rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-10 bottom-10 blue__gradient'/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
)

export default Hero
import React from 'react';
import { clients } from '../constants';
import styles, { layout } from '../style';

const Clients = () =>(
  <section className={`${styles.flexCenter} flex flex-col my-10`}>
    {/* <div className='absolute z-[0] w-[100%] h-[10%] rounded-full comp__gradient '/> */}
    <div className={`${layout.sectionInfo} pt-0 pb-2.5 items-center`}>
      <h2 className={`${styles.heading2} text-center`}>
      Bizni Tanlaganlar

      {/* <br className='sm:block hidden'/> billing & invoicing. */}
      </h2>
      <p className={`font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] text-center w-full p mb-5`}>
      Lorem impsum amament
      </p>
      </div>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
          <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
        </div>
      ))}
    </div>
  </section>
)


export default Clients
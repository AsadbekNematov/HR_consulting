import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from '../style';
import Button from './Button';

const Contact = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.2969779, lng: 69.2544999
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='w-1/2'>
        <LoadScript googleMapsApiKey='AIzaSyB-cgbA0zZX75aObteuZtdOy5Tm6-KNmck'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={17}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>

      <div className='w-1/2 p-5 text-white'>
        <h2 className={`${styles.heading2}`}>Contact Information</h2>
        <p className={`font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] w-full p mb-5`}>Address: 123 Main St, New York, NY 10001</p>
        <p className={`font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] w-full p mb-5`}>Phone: (123) 456-7890</p>
        <p className={`font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] w-full p mb-5`}>Email: info@yourcompany.com</p>
        <p className={`font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] w-full p mb-5`}>Working Hours: 9AM - 5PM</p>
      </div>
    </section>
  )
}

export default Contact;

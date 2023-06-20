import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from '../style';
import Button from './Button';

const Contact = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.756795, lng: -73.954298
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='w-1/2'>
        <LoadScript googleMapsApiKey='AIzaSyB-cgbA0zZX75aObteuZtdOy5Tm6-KNmck'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>

      <div className='w-1/2 text-white'>
        <h2>Contact Information</h2>
        <p>Address: 123 Main St, New York, NY 10001</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@yourcompany.com</p>
        <p>Working Hours: 9AM - 5PM</p>
      </div>
    </section>
  )
}

export default Contact;

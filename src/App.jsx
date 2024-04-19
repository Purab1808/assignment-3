import React from 'react';
import PropertyList from './propertylist';
import styles from './App.module.css';

const properties = [
  {
    id: 1,
    name: 'modern house',
    pictureUrl: 'https://newprojects.99acres.com/projects/gop_group/delhi_ncr_farmhouses_by_gop_group/images/m9di2el_1699515157_455623444_large.jpg',
    price: 500000,
    details: '2 Bedroom House in Sathuvachari, Vellore'
  },
  {
    id: 2,
    name: 'Delhi NCR Farmhouses by GOP Group ',
    pictureUrl: 'https://newprojects.99acres.com/projects/gop_group/delhi_ncr_farmhouses_by_gop_group/images/dt42qbt_1699515163_455623594_med.jpg',
    price: 700000,
    details: '4,5,6 bhk villas in delhi'
  },
  {
    id: 3,
    name: 'Independent villa',
    pictureUrl: 'https://imagecdn.99acres.com/media1/23240/18/464818938M-1704192797678.jpg',
    price: 680000,
    details: '7 Bedroom House for sale in Pitampura, North Delhi'
  },
  {
    id: 4,
    name: 'Residential apartment',
    pictureUrl: 'https://newprojects.99acres.com/projects/spectrum_properties/verdant_by_spectrum/images/xvweoay_1706697195_470542086_med.jpg',
    price: 440000,
    details: '2 BHK Apartment in Bandra West, Mumbai'
  },
  {
    id: 5,
    name: 'Sheth Edmont',
    pictureUrl: 'https://newprojects.99acres.com/projects/ashwin_sheth_group/sheth_edmont/images/x3siwk6_1700551579_457268530_med.jpg',
    price: 730000,
    details: '2, 3 BHK Apartment in Kandivali West, Mumbai'
  },
  {
    id: 6,
    name: 'Natasha Atlantis',
    pictureUrl: 'https://newprojects.99acres.com/projects/natasha_developers/natasha_atlantis/images/nc7x9de_1692338990_440259602_med.jpg',
    price: 910000,
    details: '1, 2 BHK Apartment in Vikhroli East, Mumbai'
  },
  {
    id: 7,
    name: 'Sheth Montana',
    pictureUrl: 'https://newprojects.99acres.com/projects/sheth__developers/sheth_monatana/images/u1mcf7l9_med.jpg',
    price: 800000,
    details: '2, 3, 4, 5, 7 BHK Apartment in Mulund West, Mumba'
  },
  {
    id: 8,
    name: 'Roseate Homes',
    pictureUrl: 'https://newprojects.99acres.com/projects/planmen_buildtech_llp/planmen_roseate_homes/images/w8mooxen_med.jpg',
    price: 650000,
    details: '3 BHK Apartment in Zirakpur, Chandigarh'
  }
 
];

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Real Estate Properties</h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export default App;
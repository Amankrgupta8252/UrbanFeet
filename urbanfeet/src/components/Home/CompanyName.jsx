import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyName.css'; 

const brands = [
  {
    name: 'Nike',
    image: 'https://i5.walmartimages.com/asr/21713497-895d-4085-bd9e-01a2df6b3700_1.0c2e85c7953c44eee100fb3bc8782914.jpeg',
  },
  {
    name: 'Adidas',
    image: 'https://images-static.nykaa.com/media/catalog/product/b/d/bd88401BDADIDA00059365_1.jpg?tr=w-344,h-344,cm-pad_resize',
  },
  {
    name: 'Puma',
    image: 'https://images-static.nykaa.com/media/catalog/product/9/7/97030b8DPUMAX00168468_1.jpg?tr=w-344,h-344,cm-pad_resize',
  },
  {
    name: 'Reebok',
    image: 'https://i8.amplience.net/i/jpl/sz_686989_a?qlt=92&w=750&h=580&v=1&fmt=auto',
  },
  {
    name: 'Nike',
    image: 'https://i5.walmartimages.com/asr/21713497-895d-4085-bd9e-01a2df6b3700_1.0c2e85c7953c44eee100fb3bc8782914.jpeg',
  },
  {
    name: 'Adidas',
    image: 'https://images-static.nykaa.com/media/catalog/product/b/d/bd88401BDADIDA00059365_1.jpg?tr=w-344,h-344,cm-pad_resize',
  },
  {
    name: 'Puma',
    image: 'https://images-static.nykaa.com/media/catalog/product/9/7/97030b8DPUMAX00168468_1.jpg?tr=w-344,h-344,cm-pad_resize',
  },
  {
    name: 'Reebok',
    image: 'https://i.ebayimg.com/images/g/-skAAOSwVvRkcsqy/s-l1600.jpg',
  },
  {
    name: 'New Balance',
    image: 'https://cdn.sweatband.com/new_balance_w560v3_womens_running_shoes_new_balance_w560v3_womens_running_shoes_pair_2000x2000.jpg',
  },
  {
    name: 'Asics',
    image: 'https://th.bing.com/th/id/OIP.1oFHqICtFH6Tq3ZN0kZIlwHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&cb=idpwebpc1',
  },
  {
    name: 'Under Armour',
    image: 'https://www.youngsneaker.com/us/images/1258723-183.jpg',
  },
  {
    name: 'Hoka One One',
    image: 'https://images-static.nykaa.com/media/catalog/product/f/3/f3f62bb1011C122300_3.jpg?tr=w-344,h-344,cm-pad_resize',
  },
  {
    name: 'Saucony',
    image: 'https://th.bing.com/th/id/OIP.Vjhkjk59xL3SdE5Q5tP-HgHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc1',
  },
  {
    name: 'Brooks',
    image: 'https://th.bing.com/th/id/OIP.2GkaeXL4155F2S9DmfY4YwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc1',
  },
  
];

function Company_Name() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Partners</h2>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {brands.map((brand, index) => (
            <div className="scroll-item text-center" key={index}>
              <img
                src={brand.image}
                alt={brand.name}
                className="brand-img"
              />
              <p className="mt-2 fw-semibold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company_Name;

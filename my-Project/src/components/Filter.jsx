import React from 'react';

const Filter = () => {
  return (
    <div className='w-3/4'>
    <div className="p-5 w-64 border-r  border-gray-300">
      <h6 className="font-bold mb-2">Price</h6>
      <div className="flex flex-col mb-4">
        {['$500 & Under', '$500 - $999', '$1,000 - $1,999', '$2,000 - $5,000', '$5,000 & Over'].map((priceRange, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={priceRange} className="mr-2" />
            {priceRange}
          </label>
        ))}
      </div>
      <hr className="my-4" />
      <h6 className="font-bold mb-2">Brands</h6>
      <div className="flex flex-col">
        {[
          'Acer        (6)',
          'Apple       (34)',
          'ASUS        (13)',
          'Dell        (7)',
          'HP          (10)',
          'Intel       (14)',
          'JBL         (4)',
          'Lenovo      (5)',
          'Marshall    (5)',
          'Panasonic   (13)',
          'Playstation (12)',
          'Samsung     (20)',
          'xBox        (7)'  
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className="my-4" />
      <h6 className="font-bold mb-2">Screen Size</h6>
      <div className="flex flex-col">
        {[
          '0 - 6" (3)',
          '12" - 14" (4)',
          '14" - 16" (4)',
          '16" - 20" (3)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">Hard Drive Size</h6>
      <div className="flex flex-col">
        {[
          '1.0TB (3)',
          '2.0TB (2)',
          '320GB (5)',
          '500GB (4)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">RAM</h6>
      <div className="flex flex-col">
        {[
          '12GB & Up (3)',
          '6GB (3)',
          '8GB (4)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">Operating System</h6>
      <div className="flex flex-col">
        {[
          'Android (1)',
          'iOS (1)',
          'MacOS (4)',
          'Window (6)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">Laptop Computer Type</h6>
      <div className="flex flex-col">
        {[
          '2-in-1s (3)',
          'Business (6)',
          'Chromebooks (6)',
          'Gaming (5)',
          'Ultra Thin (5)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">Storage Capacity</h6>
      <div className="flex flex-col">
        {[
          '128GB (3)',
          '256GB (5)',
          '512GB (3)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">Color</h6>
      <div className="flex flex-col">
        {[
          'Black (33)',
          'Dark Gray (2)',
          'Gold (4)',
          'Green (1)',
          'Multicolor (2)',
          'Pink (4)',
          'Purple (3)',
          'Red (4)',
          'Silver (9)',
          'White (12)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
      <hr className='my-4'/>
      <h6 className="font-bold mb-2">Condition</h6>
      <div className="flex flex-col">
        {[
          'New (9)',
          'New with Defects (2)',
          'Referbished (2)',
          'Remanufatured (4)',
          'Restored (3)',
        ].map((brand, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" name={brand} className="mr-2" />
            {brand}
          </label>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Filter;

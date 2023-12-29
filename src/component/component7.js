import img1 from "../web-assets/assets/img/testimonials-1.jpg"
import img2 from "../web-assets/assets/img/testimonials-2.jpg"
import img3 from "../web-assets/assets/img/testimonials-3.jpg"
import React from 'react';

const Seven_Component = () => {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <h2 style={{ textAlign: 'center' }}>What people are saying.....</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '90px' }}>
          <img style={{ borderRadius: '50%', width: '100px' }} src={img1} alt="User 1" />
          <h4>Margaret E</h4>
          <p>This is fantastic! Thanks so much, guys</p>
        </div>
        <div style={{ marginRight: '90px', marginLeft: '90px' }}>
          <img style={{ borderRadius: '50%', width: '100px' }} src={img2} alt="User 2" />
          <h4>Margaret E</h4>
          <p>This is fantastic! Thanks so much, guys</p>
        </div>
        <div style={{ marginLeft: '90px' }}>
          <img style={{ borderRadius: '50%', width: '100px' }} src={img3} alt="User 3" />
          <h4>Margaret E</h4>
          <p>This is fantastic! Thanks so much, guys</p>
        </div>
      </div>
    </div>
  );
};

export { Seven_Component };

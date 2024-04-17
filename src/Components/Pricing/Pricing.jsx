import React, { useState } from 'react';

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  const toggleBilling = () => {
    setAnnualBilling(!annualBilling);
  };

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', background: '#f7f7ff', width: '100%',height:'100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden' }}>
      <header style={{ color: '#393bc5', margin: '3.3rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Our Pricing</h1>
        <div style={{ marginTop: '2rem', color: '#393bc5', display: 'flex', alignItems: 'center' }}>
          <label>Annually </label>
          <div style={{ margin: '0 1rem' }}>
            <input
              type="checkbox"
              style={{ display: 'none' }}
              checked={annualBilling}
              onChange={toggleBilling}
            />
            <label style={{ background: 'linear-gradient(135deg, rgba(163, 168, 240, 1) 0%, rgba(105, 111, 221, 1) 100%)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1.6rem', width: '3.3rem', borderRadius: '1.6rem', padding: '0.3rem' }}>
              <div style={{ backgroundColor: '#fff', height: '1.4rem', width: '1.4rem', borderRadius: '50%' }}></div>
            </label>
          </div>
          <label> Monthly</label>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexWrap: 'wrap',width:'100%' }}>
        <div style={{ background: '#fff', color: '#000', borderRadius: '0.8rem', boxShadow: '-5px 5px 15px 1px rgba(0, 0, 0, 0.3)',margin:'10px' }}>
          <ul style={{ margin: '2.6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <li style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', width: '100%', padding: '1rem 0' }}>Free</li>
            <li style={{ fontSize: '3rem', color: '#000', paddingBottom: '2rem' }} className="price bottom-bar">
              {annualBilling ? '₹0' : '₹0'}
            </li>
            <li className="bottom-bar">500 GB Storage</li>
            <li className="bottom-bar">2 Users Allowed</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li className="bottom-bar">50 Email Accounts</li>
            <li>
              <button style={{ marginTop: '1rem', height: '2.6rem', width: '13.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', background: '#393bc5', color: '#fff', outline: 'none', border: '0', fontWeight: 'bold' }}>Order Now</button>
            </li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#393bc5',color:'#fff', borderRadius: '0.8rem', boxShadow: '-5px 5px 15px 1px rgba(0, 0, 0, 0.3)',margin:'10px' }}>
          <ul style={{ margin: '2.6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <li style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', width: '100%', padding: '1rem 0' }}>Premium</li>
            <li style={{ fontSize: '3rem', color: '#fff', paddingBottom: '2rem' }} className="price bottom-bar">
              {annualBilling ? '₹50' : '₹50'}
            </li>
            <li className="bottom-bar">500 GB Storage</li>
            <li className="bottom-bar">2 Users Allowed</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li className="bottom-bar">50 Email Accounts</li>
            <li>
              <button style={{ marginTop: '1rem', height: '2.6rem', width: '13.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', background: '#fff', color: '#393bc5', outline: 'none', border: '0', fontWeight: 'bold' }}>Order Now</button>
            </li>
          </ul>
        </div>
        <div style={{ background: '#fff', color: '#000', borderRadius: '0.8rem', boxShadow: '-5px 5px 15px 1px rgba(0, 0, 0, 0.3)',margin:'10px' }}>
          <ul style={{ margin: '2.6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <li style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', width: '100%', padding: '1rem 0' }}>Ultimate</li>
            <li style={{ fontSize: '3rem', color: '#000', paddingBottom: '2rem' }} className="price bottom-bar">
              {annualBilling ? '₹100' : '₹100'}
            </li>
            <li className="bottom-bar">500 GB Storage</li>
            <li className="bottom-bar">2 Users Allowed</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li className="bottom-bar">50 Email Accounts</li>
            <li>
              <button style={{ marginTop: '1rem', height: '2.6rem', width: '13.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', background:'#393bc5', color: '#fff', outline: 'none', border: '0', fontWeight: 'bold' }}>Order Now</button>
            </li>
          </ul>
        </div>
      
        
      </div>
    </div>
  );
};

export default Pricing;

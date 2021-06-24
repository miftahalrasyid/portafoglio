import React from 'react';
// import logo from './logo.svg';
import './Home.css';
// import reportWebVitals from './reportWebVitals';

export const Home = () =>{
//   reportWebVitals(console.log)
  return (
    // <div className="App">
    <>
    <section className="heading">
        <div className="bicycle-parts">
        <h2>Apa yang kamu tau<br/> tentang Sepeda? </h2>
        <img src="/images/tom-austin-ntCUsrIgd94-unsplash.jpg" alt="header-img"/>
        </div>
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </section>
      <section className="features">
      <h2>Jenis jenis sepeda</h2>
    <div className="primary-content-header">
      <img src="/images/mountain bike.jpg" alt="mountain-bike"/>
    <div className="primary-txt-container">
    {/* <p>Kami mereview semua part sepeda dalam satu site sehingga konsumen dapat teredukasi dalam hal bagian bagian dari sepeda bila ingin merakit sendiri sepeda dari awal</p> */}
    <h3>Mountain Bike</h3>
    <p>Fitur yang paling mudah dikenali dari sepeda ini adalah bentuk roda yang bergerigi. Sepeda ini dirancang untuk dapat digunakan optimal pada kondisi jalan yang tidak beraspal seperti di jalan tanah ataupun menuruni bukit/gunung. Oleh karena itu, sepeda ini dilengkapi dengan sistem shock untuk meredam guncangan dari bebatuan. </p>
    </div>
    </div>
    <div className="primary-content-header">
      <img src="/images/road bike.jpg" alt="road-bike"/>
    <div className="primary-txt-container">
    {/* <p>Kami mereview semua part sepeda dalam satu site sehingga konsumen dapat teredukasi dalam hal bagian bagian dari sepeda bila ingin merakit sendiri sepeda dari awal</p> */}
    <h3>Road Bike</h3>
    <p>Sepeda ini dapat mudah dikenali melalui handle sepeda yang melengkung seperti huruf U. handle tersebut dirancang agar pesepeda mudah untuk mengontrol sepeda saat meluruskan badan secara horizontal untuk mengurangi gesekan udara yang datang dari depan. Sepeda ini dirancang untuk meningkatkan gesekan permukaan ban ke aspal sehingga memiliki tingkat kecepatan, kontrol, dan pengereman yang optimal.</p>
    </div>
    </div>
    <div className="primary-content-header">
      <img src="/images/city bike.jpg" alt="city-bike"/>
    <div className="primary-txt-container">
    {/* <p>Kami mereview semua part sepeda dalam satu site sehingga konsumen dapat teredukasi dalam hal bagian bagian dari sepeda bila ingin merakit sendiri sepeda dari awal</p> */}
    <h3>City Bike</h3>
    <p>Sepeda ini digunakan untuk transportasi di perkotaan. desain yang simple membuat sepeda ini nyaman dipakai untuk santai. untuk beberapa sepeda, ada yang dilengkapi dengan keranjang di depan untuk membawa barang.</p>
    </div>
    </div>
      </section>
    
      
    </>
    // </div>
  );
}


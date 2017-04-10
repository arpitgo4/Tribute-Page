import React from 'react';

import Header from './Header.component';
import Content from './Content.component';
import Footer from './Footer.component';

const App = () => (
  <div className="container-fluid" style={{ marginLeft: '6.7%', marginRight: '6.7%' }}>
    <div style={{ marginTop: '5.3%', padding: '5%' }} className="jumbotron">
      <Header />
      <Content />
    </div>
    <Footer />
  </div>
);

export default App;

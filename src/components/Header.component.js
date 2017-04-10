import React from 'react';

import HeaderImage from './HeaderImage.component';

const Header = () => (
  <div className="text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <p style={{ fontSize: 60, fontWeight: 500 }} >Dr. Norman Borlaug</p>
    <p style={{ fontSize: 30, fontWeight: 400 }} ><i>The man who saved a billion lives</i></p>
    <HeaderImage />
    </div>
);

export default Header;
import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
     <header className="topo">
        <div className="container">
            <div className="topbox">
                <img className="logo"
                    src="https://www.reidoscoins.com.br/image/cache/catalog/Rei-dos-Coins-Logo-RDC-120x120.webp" />
                <div className="h1">
                    <h1>Rei dos coins</h1>
                </div>
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;

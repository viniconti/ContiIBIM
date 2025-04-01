import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className="rodape">
            <div className="logofinal"><img className="logo2"
                    src="https://www.reidoscoins.com.br/image/cache/catalog/Rei-dos-Coins-Logo-RDC-120x120.webp" /></div>
            <div className="boxfinal">
                <div className="desc">Nos siga nas nossas redes sociais</div>
                <div className="redessociais">
                    <div className="instagram"><img
                            src="https://www.reidoscoins.com.br/image/cache/common/footer/instagram-35x35.webp" /></div>
                    <div className="facebook"><img
                            src="https://www.reidoscoins.com.br/image/cache/common/footer/facebook-35x35.webp" /></div>
                    <div className="tiktok"><img
                            src="https://www.reidoscoins.com.br/image/cache/common/footer/tiktok-35x35.webp" /></div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;

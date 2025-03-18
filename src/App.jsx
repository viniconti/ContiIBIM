import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="topo">
        <div class="container">
            <div class="topbox">
                <img class="logo"
                    src="https://www.reidoscoins.com.br/image/cache/catalog/Rei-dos-Coins-Logo-RDC-120x120.webp">
                <div class="h1">
                    <h1>Rei dos coins</h1>
                </div>
            </div>
        </div>
    </header>
    <div class="bottombox">
        <div class="subtopo">
            <div class="h2">
                <h2>Prazo MÉDIO: 5 minutos à 50 minutos!</h2>
            </div>
            <div class="h22">
                <h2 class="h222">🏅 Número #1 em Gift card do Brasil !! 💬 Suporte 24h!</h2>
            </div>
        </div>
        <div><img class="anuncio"
                src="https://www.reidoscoins.com.br/image/cache/catalog/banners/Rei-dos-Coins-Banner-Twitch-SUB-1903x351.webp">
        </div>
        <div class="itens">
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Xbox-204x286.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card xbox</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift"
                        src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Nintendo-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card nintendo</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Apple-204x286.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card apple</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift"
                        src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Tibia-COINS-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card tibia</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Tinder-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card tinder</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift"
                        src="https://www.reidoscoins.com.br/image/cache/catalog/Home/PUBG-Mobile-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card pubg</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Steam-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card steam</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Twitch-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card twitch</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Uber-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card uber</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/Spotify-75x105.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card spotify</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift" src="https://www.reidoscoins.com.br/image/cache/catalog/Home/iFood-204x286.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card ifood</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
            <div class="card">
                <div class="imagem">
                    <img class="gift"
                        src="https://www.reidoscoins.com.br/image/cache/catalog/Home/HBO-Max-204x286.webp">
                </div>
                <div class="texto">
                    <h2 class="text-main">Gift card hbo max</h2>
                    <h3 class="preço">R$ 25,00</h3>
                </div>
            </div>
        </div>
        <div class="rodape">
            <div class="logofinal"><img class="logo2"
                    src="https://www.reidoscoins.com.br/image/cache/catalog/Rei-dos-Coins-Logo-RDC-120x120.webp"></div>
            <div class="boxfinal">
                <div class="desc">Nos siga nas nossas redes sociais</div>
                <div class="redessociais">
                    <div class="instagram"><img
                            src="https://www.reidoscoins.com.br/image/cache/common/footer/instagram-35x35.webp"></div>
                    <div class="facebook"><img
                            src="https://www.reidoscoins.com.br/image/cache/common/footer/facebook-35x35.webp"></div>
                    <div class="tiktok"><img
                            src="https://www.reidoscoins.com.br/image/cache/common/footer/tiktok-35x35.webp"></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App

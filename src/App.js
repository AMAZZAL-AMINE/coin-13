import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Components/Coin';
import { CoinApp, CoinsSearch, CoinText } from './styled/style';
import './App.css';
import Navbar from './Components/Navbar'


function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );




    return (
        <>

            <CoinApp>

                <CoinsSearch>
                    <CoinText>Search A Currency</CoinText>
                    <form>
                        <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
                    </form>
                </CoinsSearch>
                {filteredCoins.map(coin => {
                    return (
                        <Coins
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketCap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    );
                })}
            </CoinApp>
        </>
    );
}

export default App;
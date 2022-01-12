import React from 'react'
import {CoinContainer,CoinRow,Coin,CoinSymbol,CoinData,CoinPrice,CoinVolume,CoinMarketCap} from '../styled/Coin'


const Coins =  ({ name,image,symbol,price,volume,priceChange,marketCap }) => {
    const style = {
        fontSize:16+'px',
        width:150+'px',
    }
    const styleImage = {
        height:30+'px',
        width:30+'px',
        marginRight: 10+'px',
    }
    const styleTwo = {
        width:100+'%',
        color: 'red',
         
    }
    const styleTree = {
        width:100+'%',
        color: 'green'
    }
    
    return (
        <CoinContainer>
            <CoinRow>
                <Coin>
                    <img style={styleImage} src={image}  alt="Crypto" />
                    <h1 style={style}>{name}</h1>
                    <CoinSymbol>{symbol}</CoinSymbol>
                </Coin>
                <CoinData>
                    <CoinPrice>${price}</CoinPrice>
                    <CoinVolume>${volume.toLocaleString()}</CoinVolume>
                    {priceChange < 0 ? (
                        <p style={styleTwo} >{priceChange.toFixed(2)}%</p>
                    ) : (<p style={styleTree}>{priceChange.toFixed(2)}%</p>)
                    }
                    <CoinMarketCap>
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </CoinMarketCap>
                </CoinData>
            </CoinRow>
        </CoinContainer>
    )          
};

export default Coins;
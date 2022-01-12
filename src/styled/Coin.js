import styled from 'styled-components';

export const CoinContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d7d7d7;
    width: 900px;
`

export const Coin = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;
    min-width: 300px;
`
export const CoinSymbol = styled.p`
    text-transform: uppercase;
`
export const CoinData = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
`
export const CoinPrice = styled.p`
    margin-top: 13px;
    width: 110px;
`
export const CoinVolume = styled.p`
    width: 230px;
    margin-left: 15px;
    margin-top: 13px;

`
export const CoinMarketCap = styled.p`
    width: 155px;
`

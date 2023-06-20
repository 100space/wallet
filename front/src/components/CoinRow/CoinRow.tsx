import { ICoinData } from "@utils/interFace/styled.interface"
import { CoinRowWrap, CoinRowRank, CoinRowName, CoinRowPrice, CoinRowRate } from "./styled"

export const CoinRow = ({ coinData }: ICoinData) => {
    return(
        <CoinRowWrap>
            <CoinRowRank width="10%" rank={coinData.rank}/>
            <CoinRowName width="30%" coinImg={coinData.coinImg} name={coinData.name} symbol={coinData.symbol}/>
            <CoinRowPrice width="45%" price={coinData.price}/>
            <CoinRowRate width="15%" rate={coinData.rate}/>
        </CoinRowWrap>
    )
}
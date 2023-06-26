import { CoinDescription, CoinInforHeader, CoinInfoRow, CoinInfoWrap } from "./styled"
import { ICoinInfo } from "@utils/interFace/coin.interface"
import { useGetMode } from "@hooks/useMode"


export const CoinInfo = ( props: { coinInfo: ICoinInfo}) => {
    const [modeState, setChange] = useGetMode()

    return(
        <CoinInfoWrap mode={modeState.mode}>
            <CoinInforHeader mode={modeState.mode} name={props.coinInfo.name} symbol={props.coinInfo.symbol} image={props.coinInfo.image} />
            <CoinInfoRow mode={modeState.mode} content={["현재가" ,props.coinInfo.price, props.coinInfo.currency, props.coinInfo.changePercent]} />
            <CoinInfoRow mode={modeState.mode} content={["BTC", props.coinInfo.price, "BTC", props.coinInfo.changePercent]} />
            <CoinInfoRow mode={modeState.mode} content={["시가 총액(달러)",'$ ' + props.coinInfo.marketCap.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")]}/>
            <CoinInfoRow mode={modeState.mode} content={["총 발행량", props.coinInfo.maxSupply]}/>
            <CoinInfoRow mode={modeState.mode} content={["공급량", props.coinInfo.totalSupply]}/>
            <CoinInfoRow mode={modeState.mode} content={["유통량", props.coinInfo.circulatingSupply]}/>
            <CoinDescription name={props.coinInfo.name} description={props.coinInfo.description}/>
        </CoinInfoWrap>
    )
}
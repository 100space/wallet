import { CoinInforHeader, CoinInfoRow, CoinInfoWrap } from "./styled"
import { ICoinInfo } from "@utils/interFace/coin.interface"
import { useGetMode } from "@hooks/useMode"


export const CoinInfo = ( props: { coinInfo: ICoinInfo}) => {
    const [modeState, setChange] = useGetMode()

    return(
        <CoinInfoWrap mode={modeState.mode}>
            <CoinInforHeader mode={modeState.mode} name={props.coinInfo.name} symbol={props.coinInfo.symbol} image={props.coinInfo.image} />
            <CoinInfoRow mode={modeState.mode} content={[props.coinInfo.price, props.coinInfo.currency, props.coinInfo.changePercent]} />
            <CoinInfoRow mode={modeState.mode} content={[props.coinInfo.circulatingSupply]}/>
        </CoinInfoWrap>
    )
}
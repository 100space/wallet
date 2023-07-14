import { CoinDescription, CoinInforHeader, CoinInfoRow, CoinInfoWrap } from "./styled"
import { ICoinInfo } from "@utils/interFace/coin.interface"
import { useGetMode } from "@hooks/useMode"
import { BackBtnHeader } from "@common/header/BackBtnHeader"
import { MouseEvent } from "react"

export const CoinInfo = (props: {
    coinInfo: ICoinInfo
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
}) => {
    const [modeState, setChange] = useGetMode()
    const backBtnClickHandler = (e: MouseEvent) => {
        props.setIsOpen(!props.isOpen)
    }

    return (
        <>
            <BackBtnHeader onClick={backBtnClickHandler} content={props.coinInfo.name} />
            <CoinInfoWrap mode={modeState.mode}>
                <CoinInforHeader
                    mode={modeState.mode}
                    name={props.coinInfo.name}
                    symbol={props.coinInfo.symbol}
                    image={props.coinInfo.image}
                />
                <CoinInfoRow mode={modeState.mode} content={["현재가", props.coinInfo.price]} price={true} />
                <CoinInfoRow
                    mode={modeState.mode}
                    content={["등락율", Math.floor(props.coinInfo.changePercent * 100) / 100]}
                    percent={true}
                />
                <CoinInfoRow
                    mode={modeState.mode}
                    content={[
                        "시가 총액",
                        "$ " + props.coinInfo.marketCap.toString().replace(/\d(?=(\d{3})+\b)/g, "$&,"),
                    ]}
                />
                <CoinInfoRow mode={modeState.mode} content={["총 발행량", props.coinInfo.maxSupply]} />
                <CoinInfoRow mode={modeState.mode} content={["공급량", props.coinInfo.totalSupply]} />
                <CoinInfoRow mode={modeState.mode} content={["유통량", props.coinInfo.circulatingSupply]} />
                <CoinDescription name={props.coinInfo.name} description={props.coinInfo.description} />
            </CoinInfoWrap>
        </>
    )
}

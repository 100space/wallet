import { useGetMode } from "@hooks/useMode"
import { AlarmDateWrap, AlarmListWrap, AlarmWrap, AlarmWrapper } from "./styled"
import { useRecoilState, useRecoilValue } from "recoil"
import { MouseEvent, useEffect, useState } from "react"
import { ITx } from "@utils/interFace/block.interface"
import { LoadingBar } from "@components/loading"
import { AlarmData, IsAlarm } from "@utils/localStorage/Alarm"
import { TransactionRowByAddress } from "@components/Transaction"
import { TxBtnContent, TxBtnWrap } from "@components/Button"
import { MyAccounts } from "@utils/localStorage"

interface IParsingData {
    from: string
    to: string
    timestamp: string
    value: string
}

interface IGroupData {
    [timestamp: string]: IParsingData[]
}

export const Alarm = () => {
    const tx = useRecoilValue(AlarmData)
    const { address } = useRecoilValue(MyAccounts)
    const [isAlarm, setIsAlarm] = useRecoilState(IsAlarm)
    const [modeState, setChange] = useGetMode()
    const [alarmDatas, setAlarmDatas] = useState<[string, IParsingData[]][]>()

    const handleClick = (e: MouseEvent) => {
        window.open(`https://mumbai.polygonscan.com/address/${address}`)
    }

    const alarm = (alarm: [string, IParsingData[]][]) => {
        return alarm.map((item: [string, IParsingData[]], idx) => {
            return (
                <AlarmWrap key={idx} mode={modeState.mode}>
                    {
                        item.map((v, key) => {
                            if (typeof v === "string") return <AlarmDateWrap key={key} mode={modeState.mode}>{v}</AlarmDateWrap>
                            return v.map((v2, index) => {
                                return (
                                    <AlarmListWrap key={index} mode={modeState.mode}>
                                        <TransactionRowByAddress from={v2.from} to={v2.to} timeStamp={v2.timestamp} value={v2.value} />
                                    </AlarmListWrap>
                                )
                            })
                        })
                    }
                </AlarmWrap>
            )
        })
    }

    useEffect(() => {
        if (tx.length === 0) return
        const parsingData = tx.map((v: ITx) => ({ from: v.from, to: v.to, timestamp: v.timeStamp, value: v.value }))
        const groupedData = parsingData.reduce((acc: IGroupData, v) => {
            if (!acc.hasOwnProperty(v.timestamp)) {
                acc[v.timestamp] = [];
            }
            acc[v.timestamp].push(v);
            return acc;
        }, {});
        setAlarmDatas(Object.entries(groupedData))
        setIsAlarm(false)
    }, [])

    if (!alarmDatas) return <LoadingBar />
    return (
        <AlarmWrapper mode={modeState.mode}>
            {alarm(alarmDatas)}
            <TxBtnWrap mode={modeState.mode}>
                <TxBtnContent mode={modeState.mode} onClick={handleClick}>
                    자세히 보기
                </TxBtnContent>
            </TxBtnWrap>
        </AlarmWrapper>
    )
}
import { useGetMode } from "@hooks/useMode"
import { AlarmDateWrap, AlarmListWrap, AlarmWrap, AlarmWrapper } from "./styled"

export const Alarm = () => {
    const [modeState, setChange] = useGetMode()
    const alarmData = [
        {
            date: "2023.06.12",
            list: ["", ""]
        },
        {
            date: "2023.06.14",
            list: ["", ""]
        },
        {
            date: "2023.06.16",
            list: ["", ""]
        },
    ]
    return(
        <>
            <AlarmWrapper mode={modeState.mode}>
                {alarmData.map((alarm, index) => 
                    (<AlarmWrap key={index} mode={modeState.mode}>
                        <AlarmDateWrap mode={modeState.mode}>{alarm.date}</AlarmDateWrap>
                        {alarm.list.map((item, itemIndex) =>(
                            <AlarmListWrap key={itemIndex} mode={modeState.mode}>{alarm.list}</AlarmListWrap>
                        ))}
                    </AlarmWrap>
                ))}
            </AlarmWrapper>
        </>
    )
}
import { InputList, SendComp, sendList } from "@common/index"
import { PopUpItem, PopupComp } from "@components/bottomSheet"
import { usePopup } from "@hooks/usePopup"
import { ScanOpen } from "@utils/localStorage"
import { useNavigate } from "react-router"
import { SetterOrUpdater, useRecoilState } from "recoil"
import Swal from "sweetalert2"

export const Alert = Swal.mixin({
    toast: true,
    position: "top-end",
    width: "70%",
    // backdrop: true,
    showConfirmButton: false,
    timer: 2000,
    color: "#e2e2e2",
    background: "#000",
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
    },
})

export const ConfirmAlert = (
    address: string,
    setScanOpen: { (valOrUpdater: boolean | ((currVal: boolean) => boolean)): void; (arg0: boolean): void },
    setOpen: SetterOrUpdater<{ isOpen: boolean; contents: string }>
) => {
    Swal.fire({
        title: `${address} `,
        text: "계정으로 송금하시겠습니까?",
        icon: "info",
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
        cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
        confirmButtonText: "송금", // confirm 버튼 텍스트 지정
        cancelButtonText: "취소", // cancel 버튼 텍스트 지정
        reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
        if (result.value && result.isConfirmed) {
            setOpen({ isOpen: true, contents: address })
            setScanOpen(false)
        } else if (result.isDismissed) {
            Swal.fire("취소되었습니다.", "", "warning")
        }
    })
}

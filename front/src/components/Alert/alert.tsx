import { styled } from "@tanstack/react-query-devtools/build/lib/utils"
import { SetterOrUpdater, useRecoilState } from "recoil"
import Swal from "sweetalert2"

export const Alert = Swal.mixin({
    toast: true,
    position: "top-end",
    width: "80%",
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

export const ConfirmComp = () => {
    Swal.fire({
        title: "계정 정보가 삭제됩니다.",
        text: "계정 정보를 삭제하시겠습니까?",
        icon: "info",
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#e90808", // confrim 버튼 색깔 지정
        cancelButtonColor: "#d6c1c1", // cancel 버튼 색깔 지정
        confirmButtonText: "삭제", // confirm 버튼 텍스트 지정
        cancelButtonText: "취소", // cancel 버튼 텍스트 지정
        reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
        if (result.value && result.isConfirmed) {
            localStorage.clear()
        } else if (result.isDismissed) {
            Swal.fire("취소되었습니다.", "", "warning")
        }
    })
}

export const PurchaseAlert = (
    address: string,
    setScanOpen: { (valOrUpdater: boolean | ((currVal: boolean) => boolean)): void; (arg0: boolean): void },
    setOpen: SetterOrUpdater<{ isOpen: boolean; contents: string }>
) => {
    Swal.fire({
        title: `${address} `,
        text: "NFT를 구매하시겠습니까?",
        icon: "question",
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
        cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
        confirmButtonText: "승인", // confirm 버튼 텍스트 지정
        cancelButtonText: "취소", // cancel 버튼 텍스트 지정
        reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
        if (result.value && result.isConfirmed) {
            // setOpen({ isOpen: true, contents: address })
            // setScanOpen(false)
        } else if (result.isDismissed) {
            Swal.fire("취소되었습니다.", "", "warning")
        }
    })
}

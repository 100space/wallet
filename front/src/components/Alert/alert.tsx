import Swal from "sweetalert2"

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    width: "70%",
    backdrop: true,
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

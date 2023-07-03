import { Step1 } from "@common/initStep"
import { InputComp } from "@components/input"
import { render, screen } from "@testing-library/react"

describe("로그인 페이지 테스트", () => {
    it("password 값이 있을 때 버튼 내용", () => {
        const password = "password"
        const content = password ? ["enter", "forget"] : ["create", "manage"]
        expect(content).toEqual(["enter", "forget"])
    })
    it("password 값이 없을 때 버튼 내용", () => {
        const password = ""
        const content = password ? ["enter", "forget"] : ["create", "manage"]
        expect(content).toEqual(["create", "manage"])
    })
    jest.mock("@utils/axios/requestServer", () => ({
        get: jest.fn(() => Promise.resolve({ mnemonic: Array(12).fill("mnemonic") })),
    }))
    it("니모닉을 가져오는가?", async () => {
        render(<Step1 />)
    })
})
export {}

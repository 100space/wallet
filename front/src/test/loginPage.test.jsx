import requestServer from "@utils/axios/requestServer"
import { InputComp } from "../components/input"
import { render, screen } from "@testing-library/react"

jest.mock("@utils/axios/requestServer", () => ({
    get: jest.fn(() => Promise.resolve({ data: Array(12).fill("mocked mnemonic") })),
}))
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
    it("니모닉을 가져오는가?", async () => {
        const data = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh", "iii", "jjj", "kkk", "lll"]

        // Mock Axios를 사용하여 가짜 응답을 생성
        requestServer.get = jest.fn().mockResolvedValue(data)
    })
})
export {}

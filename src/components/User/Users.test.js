const Users = require("./Users")
// @ponicode
describe("deleteHandle", () => {
    let inst

    beforeEach(() => {
        inst = new Users.default()
    })

    test("0", async () => {
        await inst.deleteHandle(2)
    })

    test("1", async () => {
        await inst.deleteHandle(12)
    })

    test("2", async () => {
        await inst.deleteHandle("_14")
    })

    test("3", async () => {
        await inst.deleteHandle("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("4", async () => {
        await inst.deleteHandle("fake_project_id")
    })

    test("5", async () => {
        await inst.deleteHandle(undefined)
    })
})

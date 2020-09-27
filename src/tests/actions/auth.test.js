import { login, logout } from "../../actions/auth";

test("should create a login action object", () => {
    const uid = "c1be0e48-83ce-4351-859a-c9976e0819d1";
    const action = login(uid);
    expect(action).toStrictEqual({
        type: "LOGIN",
        uid
    });
});

test("should create a logout action object", () => {
    const action = logout();
    expect(action).toStrictEqual({
        type: "LOGOUT"
    });
});
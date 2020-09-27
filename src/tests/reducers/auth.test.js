import authReducer from "../../reducers/auth";

test("should set uid on login", () => {
    const uid = "c1be0e48-83ce-4351-859a-c9976e0819d1";
    const action = {
        type: "LOGIN",
        uid
    };
    const state = authReducer({}, action);
    expect(state).toStrictEqual({ uid });
});

test("should clear uid on logout", () => {
    const uid = "c1be0e48-83ce-4351-859a-c9976e0819d1";
    const action = {
        type: "LOGOUT",
        uid
    };
    const state = authReducer({ uid }, action);
    expect(state).toStrictEqual({});
});
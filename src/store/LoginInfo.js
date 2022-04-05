import {atom} from "recoil";

const u_authority = atom({
    key: 'u_authority',
    default: "",
});

const userInfo = atom({
    key: 'userInfo',
    default: {"nickname":"","password":""},
});

const isLogedIn = atom({
    key: 'isLogedIn',
    default: false,
})

export {u_authority, userInfo, isLogedIn};
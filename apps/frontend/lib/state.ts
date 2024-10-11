import { atom } from "recoil";

export enum Pages {
    signin = "Signin",
    signup = "Signup",
    dashboard = "Dashboard",
    transactions = "Transactions",
    statistics = "Statistics",
    profile = "Profile",
    settings = "Settings"
}

export const currentPage = atom<Pages>({
    key: 'currentPage',
    default: Pages.dashboard
})

export const currentUserEmail = atom<string | null>({
    key: 'currentUserEmail',
    default: null
})

export const transactionId = atom<string | null>({
    key: 'transactionId',
    default: null
})



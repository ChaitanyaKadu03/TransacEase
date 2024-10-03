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

export const currentUserId = atom<string | null>({
    key: 'currentUserId',
    default: null
})



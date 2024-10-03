import { atom } from "recoil";

enum Pages {
    signin = "signin",
    signup = "signup",
    dashboard = "dashboard",
    transactions = "transactions",
    statistics = "statistics",
    profile = "profile",
    settings = "settings"
}

export const currentPage = atom<string | null>({
    key: 'currentPage',
    default: Pages.dashboard
})

export const currentUserId = atom<string | null>({
    key: 'currentUserId',
    default: null
})



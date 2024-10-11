import { Pages } from "./state";

export type transaction = {
    _id: oid;
    email: string;
    title: string;
    description: string;
    type: "DEBITED" | "CREDITED";
    category: string;
    date: string;
    amount: number;
    currency: string;
    proof: string | null;
    paymentType: string;
};

type dateFormat = {
    $date: string
}

type oid = {
    $oid: string
}

export type statistics = {
    _id: oid;
    email: string;
    total: number;
    credited: number;
    debited: number;
    purchase: number;
    investment: number;
    income: number;
    savings: number;
    total_count: number,
    credited_count: number,
    debited_count: number,
};

export type pagesType = {
    id: number,
    page: Pages,
    linkto: string,
    btn: string
}
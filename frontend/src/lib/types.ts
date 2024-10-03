import { Pages } from "./state";

export type transaction = {
    _id: oid;
    userId: oid;
    title: string;
    description: string;
    type: "DEBITED" | "CREDITED";
    category: string;
    date: dateFormat;
    amount: string;
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
    userId: oid;
    thisWeek: number;
    thisMonth: number;
    credited: number;
    debited: number;
    total: number;
};

export type pagesType = {
    id: number,
    page: Pages,
    linkto: string,
    btn: string
}
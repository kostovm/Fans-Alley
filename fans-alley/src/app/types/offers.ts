export interface Offers {
    [key: string]: Offer;
}

export interface Offer {
    username: string;
    offer: number;
}
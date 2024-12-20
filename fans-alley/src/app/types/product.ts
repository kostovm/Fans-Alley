export interface Product {
    _ownerId: string;
    productName: string;
    category: string;
    description: string;
    buyPrice: number;
    sold: boolean;
    imageUrl: string;
    _id: string;
}

export interface NewProduct {
    productName:string, 
    description:string, 
    category:string, 
    price:number, 
    sold:boolean, 
    imageUrl:string
}
export interface IUser {
    id: string;
    qrImagePath: string;
    department: string;
    name: string;
    status: string;
    password: string;
}

export interface ICategory {
    id: string;
    imagePath: string;
    name: string;
    maker: string;
    model: string;
    accessories: string[];
    note: string;    
}

export interface IAsset {
    id: string;
    qrImagePath: string;
    simId: string;
    note: string;
    categoryId: ICategory;
    userId: IUser;
    buyDate: string;
    status: string;
}

export interface IRentalHistory {
    userId: string;
    assetId: string;
    date: string;
    status: string;    
}
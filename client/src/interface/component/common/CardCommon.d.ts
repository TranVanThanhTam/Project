interface ICardCommon {
    _id: string | number;
    discount?: number;
    price?: number;
    total?: number;
    selling?: boolean;
    imgHover?: string;
    imgLeave?: string;
    branchId?: string | undefined;
    title?: string;
    carousels: Array;
    thumbnails: string[];
    sizes: Array;
}
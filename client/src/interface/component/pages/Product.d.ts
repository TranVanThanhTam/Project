interface IProduct {
  _id: string | number;
  discount?: number;
  price?: number;
  selling?: boolean;
  imgHover?: string;
  imgLeave?: string;
  title?: string;
  branchId?: string | undefined;
  
  type: "sale" | "new in" | "clothing" | "shoes" | "accessories" | "sportswear" | "jeans" | "brands" | "topman" | "outlet" | "marketplace" | undefined
}

interface IProducts {
  products: Array<IProduct>;
}

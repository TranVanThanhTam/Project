interface IProduct {
  _id: string | number;
  discount?: number;
  price?: number;
  selling?: boolean;
  imgHover?: string;
  imgLeave?: string;
  title?: string;
}

interface IProducts {
  products: Array<IProduct>;
}
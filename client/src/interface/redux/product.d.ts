interface IProduct {
    id: string | number;
    name?: string;
  }
  
  interface IProducts {
    products: Array<IProduct>;
  }
  
interface IPropsCardCommon{
    id: number;
    title?: string;
    type?: text | password | date | color;
    img?: string;
    defaultImageSrc?: string;
    hoverImageSrc?: string; 
    discount?: string ;
    label?: string;
    normalPrice?: number;
    oldPrice?:  string;
    newPrice?:  string;
    selling?: boolean;
}
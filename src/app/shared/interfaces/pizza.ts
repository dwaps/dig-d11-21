export interface Pizza {
  name: string;
  category: Category;
  price: number;
  ingredients: string[];
  image: ImagePath;
  _id?: string;
}

export enum Category {
  TOMATO = "Tomate",
  CREAM = "Crème",
  SWEET = "Sucrée",
  SPECIAL = "Spéciale",
}

export enum ImagePath {
  TOMATO = "assets/categories/tomato.png",
  CREAM = "assets/categories/cream.png",
  SWEET = "assets/categories/sweet.png",
  SPECIAL = "assets/categories/special.png",
}

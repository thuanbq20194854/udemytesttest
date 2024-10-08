export interface Cart {
  userId: number;
  cartItems : CartItem []
}


export interface CartItem {
  cartId: number,
  course : CartCourse 
}


export interface CartCourse {
  id: number;
  image: string;
  level?: CartLevel;
  price?: CartPrice;
  title: string;
  subtitle: string;
  createdAt: Date;
  user: CartUser;
  description: string;
  duration: number;
  lectureCount: number;
  countReview?: number;
  averageReview?: number;
}

export interface CartLevel {
  id: number,
  name : string
}

export interface CartPrice {
  id: number,
  tier: string,
  value : number
  
}

export interface CartUser{
  id: number,
  email: string,
  name: string
}
export interface ProductType {
  _id: string;
  name: string;
  image: string;
  images: string[];
  price: number;
  discountedAmount?: number;
  category: string[];
  description: string;
  size: string[];
  stock: number;
  reviewData: {
    avgRating: number;
    numOfReviews: number;
    reviewList: {
      _id: string;
      user: {
        _id: string;
        name: string;
        image: string;
      };
      rating: number;
      comment: string;
      createdAt: Date;
    }[];
  };
  cratedAt: Date;
  updatedAt: Date;
}

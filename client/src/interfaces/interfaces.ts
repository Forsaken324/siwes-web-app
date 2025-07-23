export interface AuthInterface
{
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChildrenInterface
{
    children: React.ReactNode;
}

export interface Countries
{
    code: string;
    name: string;
}

export interface CarPayload
{
    _id: string;
    owner: string;
    brand: string;
    model: string;
    image: string;
    year: number;
    category: string;
    seating_capacity: number;
    fuel_type: string;
    transmission: string;
    pricePerDay: number;
    location: string;
    description: string;
    isAvailable: boolean;
    createdAt: Date;
    features: Array<string>;
}

export interface CarCardProps
{
    car: CarPayload;
}

export interface ReviewsPayload
{
    name: string;
    country: string;
    description: string;
    image: string;
    rating: number;
}

export interface CustomerReviewPayload
{
    customer: ReviewsPayload;
}

export interface BookingDataPayload
{
    _id: string;
    car: CarPayload;
    user: string;
    owner: string;
    pickupDate: string;
    returnDate: string;
    status: string;
    price: number;
    createdAt: string;
}


export interface BookedCarProps
{
    bookedData: BookingDataPayload
    index: number;
}
import { useEffect, useState } from "react";
import { dummyReviews } from "../assets/assets";
import type { ReviewsPayload } from "../interfaces/interfaces";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewsPayload[]>([]);

  const getReviews = async () => {
    setReviews(dummyReviews.slice(0, 3));
  };
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-[150px] p-3 md:p-0">
      <h2 className="text-[40px] font-bold">What Our Customers Say</h2>
      <p className="text-[16px] text-gray-400">
        Discover why discerning travelers choose Q Rentals for renting luxury
        vehicles around the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-15 mt-[70px]">
        {reviews.map((customer, index) => (
          <ReviewCard key={index} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

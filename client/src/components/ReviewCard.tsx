import type { CustomerReviewPayload } from "../interfaces/interfaces";
import { assets } from "../assets/assets";

const ReviewCard = ({ customer }: CustomerReviewPayload) => {
  return (
    <div className="h-[200.19px] w-[315px] md:w-[328.94px] shadow shadow-xl bg-white rounded-lg p-3 m-4 text-gray-400 dark:bg-gray-700 ">
      <div className="flex gap-4">
        <img src={customer.image} alt={customer.name} className="h-[44px]" />
        <div>
          <p className="font-bold text-black dark:text-white">{customer.name}</p>
          <p className="text-sm">{customer.country}</p>
        </div>
        {/* {assets.star_icon * customer.rating} */}
      </div>
      <div className="flex mt-2 mb-2">
        {Array.from({ length: customer.rating }, (_, i) => (
          <img key={i} src={assets.star_icon} alt="star" className="h-4 w-4" />
        ))}
      </div>
      <div className="text-sm ">{customer.description}</div>
    </div>
  );
};

export default ReviewCard;

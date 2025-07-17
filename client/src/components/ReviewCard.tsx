import type { CustomerReviewPayload } from "../interfaces/interfaces";
import { assets } from "../assets/assets";

const ReviewCard = ({ customer }: CustomerReviewPayload) => {
  return (
    <div className="h-[200.19px] w-[315px] md:w-[328.94px] shadow shadow-xl bg-white rounded-lg p-3 m-4 text-gray-400">
      <div className="flex gap-4">
        <img src={customer.image} alt={customer.name} className="h-[44px]" />
        <div>
          <p className="font-bold text-black">{customer.name}</p>
          <p className="text-sm">{customer.country}</p>
        </div>
        {/* {assets.star_icon * customer.rating} */}
        {/* <assets.star_icon/> */}
      </div>
      <div className="text-sm mt-[20px]">{customer.description}</div>
    </div>
  );
};

export default ReviewCard;

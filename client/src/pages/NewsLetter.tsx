import { useState } from "react";

const NewsLetter = () => {
  const [subscriberEmail, setSubscriberEmail] = useState<string>("");
  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
        e.preventDefault();
        await handleEmailSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscriberEmail(e.target.value);
  }

  const handleEmailSubmit = async () => {
    if(!subscriberEmail) return;
    // submit logic stuff
    window.alert('hahaha');
    setSubscriberEmail('');
  }
  return (
    <div className="flex flex-col items-center justify-center pt-[200px] dark:bg-black">
      <h2 className="font-bold text-[40px] mb-4 dark:text-white">Never Miss a Deal!</h2>
      <p className="text-sm text-gray-400 ml-5 md:ml-0">
        Subscribe to get the latest offers, new collections, and exclusive
        discounts.
      </p>
      <div className="flex mt-[70px]">
        <input
          type="text"
          className="xl:w-[724px] h-[45px] md:w-[600px] xl:h-[52px] border border-gray-400 p-3 outline-orange-400/30 dark:bg-gray-700 dark:text-white"
          placeholder="Enter your email address"
          value={subscriberEmail}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="h-[45px] xl:h-[52px] bg-primary xl:w-[171px] text-white p-4 xl:p-0 text-[12px] xl:text-md" onClick={handleEmailSubmit}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

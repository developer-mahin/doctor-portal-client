import React from "react";

const SingleTestimonial = ({ item }) => {
  const { description, authorImage, authorName, location } = item;

  return (
    <div className="flex flex-col  mx-4 my-6 shadow-lg border rounded-xl">
      <div className="px-4 pt-12 rounded-t-lg sm:px-8 md:px-12 ">
        <p className="relative px-6 py-1 text-lg italic text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
          {description}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="absolute right-0 w-8 h-8 "
          >
            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
          </svg>
        </p>
      </div>
      <div className="flex items-center justify-start gap-4 mt-5 px-7 py-8">
        <img
          src={authorImage}
          alt=""
          className="w-16 h-16 border-4 border-green-500  rounded-full"
        />
        <div>
          <p className="text-xl font-semibold leading-tight">{authorName}</p>
          <p className="text-sm uppercase">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;

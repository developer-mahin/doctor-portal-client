import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Terms = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-28 lg:max-w-[1100px] items-center mx-auto lg:pb-40 pb-16 px-3">
      <figure>
        <img src={treatment} className="rounded-lg" alt="Album" />
      </figure>
      <div className="card-body p-0 mt-4">
        <h2 className="card-title lg:text-5xl text-3xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions justify-start">
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Terms;

import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { FileUploader } from "react-drag-drop-files";
import { useQuery } from "@tanstack/react-query";
import BigSpinner from "../../../../components/Spinner/BigSpinner/BigSpinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const fileTypes = ["JPG", "PNG", "GIF"];

const AddDoctor = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentName");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <BigSpinner></BigSpinner>;
  }

  // add doctor
  const handleAddDoctor = (data, event) => {
    // hosting image
    const formDate = new FormData();
    formDate.append("image", file);
    fetch(
      `https://api.imgbb.com/1/upload?key=77f09a682af2d728593ff4efd38c7386`,
      {
        method: "POST",
        body: formDate,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctorData = {
            name: data.name,
            image: imgData.data.display_url,
            email: data.email,
            specialty: data.specialty,
          };

          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem(
                "doctors-portal-token"
              )}`,
            },
            body: JSON.stringify(doctorData),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Doctor Add Successfully");
              event.target.reset();
              navigate("/dashboard/manage-doctors");
            });
        }
      });
  };

  return (
    <div className="lg:px-14">
      <h2 className="text-3xl font-semibold mb-5 px-3 pt-14">
        Add A New Doctor
      </h2>
      <form
        onSubmit={handleSubmit(handleAddDoctor)}
        className="lg:w-1/2 w-full p-12 bg-white bg-opacity-50 rounded-xl"
      >
        <div className="form-control w-full pb-5">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 20, message: "20 character or smaller" },
              pattern: {
                value: /^[A-Za-z ]+$/i,
                message: "Number not allowed",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-400">{errors.name?.message}</p>
          )}
        </div>

        <div className="form-control w-full pb-5">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email Address is required",
            })}
          />
          {errors.email && (
            <p className="text-red-400">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full pb-5">
          <label className="label">
            <span className="label-text font-medium">Specialty</span>
          </label>
          <select
            {...register("specialty", {
              required: "Specialty Address is required",
            })}
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Select A Specialty
            </option>
            {specialties.map((specialty) => (
              <option key={specialty._id} defaultValue={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <p className="text-red-400">{errors.specialty?.message}</p>
          )}
        </div>

        <div className="form-control w-full pb-5">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            accept="image/*"
          />
        </div>

        <button
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none px-6 py-3 text-white rounded-lg font-semibold cursor-pointer uppercase mt-4"
          type="submit"
        >
          {" "}
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;

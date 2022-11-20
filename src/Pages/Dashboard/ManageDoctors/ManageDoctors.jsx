import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import BigSpinner from "../../../components/Spinner/BigSpinner/BigSpinner";
import ConfirmationModal from "../../Shared/ComfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState({});

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "doctors-portal-token"
          )}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <BigSpinner></BigSpinner>;
  }

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("doctors-portal-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Successfully Deleted ${doctor.name}`);
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full lg:px-12 lg:py-11 py-4">
      <h2 className="text-3xl font-semibold mb-5">Manage Doctors</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>AVATAR</th>
            <th>NAME</th>
            <th>SPECIALTY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="">{doctor.name}</span>
              </td>
              <td>{doctor.specialty}</td>
              <th>
                <label
                  onClick={() => setDeleteDoctor(doctor)}
                  htmlFor="confirmation-modal"
                  className="bg-[#E11244] hover:bg-[#b30e34] px-4 py-2 text-white rounded-lg font-normal cursor-pointer"
                >
                  DELETE
                </label>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmationModal
        title={"Are you sure to delete this person"}
        description={`If you are delete ${deleteDoctor.name}. you cannot be undone`}
        modalData={deleteDoctor}
        handleDeleteDoctor={handleDeleteDoctor}
      ></ConfirmationModal>
    </div>
  );
};

export default ManageDoctors;

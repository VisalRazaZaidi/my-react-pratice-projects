import React from "react";
import { useState, useEffect } from "react";

function UserCard() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const respones = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random"
      );
      const data = await respones.json();

      //Update data when api req is successfull

      if (data.success && data.data) {
        setUserData({
          firstName: data.data.name.first,
          lastName: data.data.name.last,
          email: data.data.email,
          phone: data.data.phone,
          country: data.data.location.country,
          pic: data.data.picture.large,
        });
      } else {
        console.error("Failed to Fetch User Data");
      }
    } catch (error) {
      console.error("Faild to fetch User Data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) return <p>Loading user...</p>;

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the user.
        </p>
        {userData.pic && <img src={userData.pic} alt="user-pic" className="ml-22   mt-3" />}
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">First Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData.firstName}
            </dd>
            <dt className="text-sm font-medium text-gray-500">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData.lastName}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData.email}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData.phone}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Country</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {userData.country}
            </dd>
          </div>
        </dl>
        <div className="justify-center-safe card-actions ">
          <button 
            className="btn btn-primary mb-4" 
            onClick={fetchUserData}
            disabled={isLoading}
          >
            New User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

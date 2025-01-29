import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/RGM-icon.png";
import TableComponent from "./TableComponent";
import axios from "axios";

const PublicList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_API, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-[20px] sm:py-[30px] post flex items-center justify-center">
        <Link to="/" className="block">
          <div className="trademark trademark-inAdmin">
            <img className="sm:w-[50px] trademark-icon" src={logo} />
            <div className="flex flex-col">
              <span className="sm:text-[50px] trademark-logo trademark-logo-inAdmin">RGM</span>
            </div>
          </div>
        </Link>
      </div>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error.message}</p>
      ) : (
        <TableComponent data={data?.data} />
      )}
    </div>
  );
};

export default PublicList;

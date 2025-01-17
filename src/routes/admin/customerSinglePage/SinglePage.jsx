import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Divider, Modal } from 'antd';
import moment from 'moment';
import { ExclamationCircleOutlined } from '@ant-design/icons';




const SinglePage = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData =  async ()  => {
      try{
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/${id}`, {
              headers: {
                  Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                  'Content-Type': 'application/json',
              },
          });
          setData(response.data)
      } catch(error){
          setError(error)
      } finally {
          setIsLoading(false);
      }
  }
  fetchData()
  }, [])

  const { confirm } = Modal;

const handleDeleteBooking = async (id) => {

  const showConfirm = () => {
    confirm({
      title: "Rostan ham navbatdan o'chirilsinmi?",
      icon: <ExclamationCircleOutlined />,
      content: '',
      okText: "Ha, o'chirish",
      okType: 'danger',
      cancelText: "Yo'q",
      onOk: async () => {
        try {
          const response = await axios.delete(`${import.meta.env.VITE_BACKEND_API}/${id}`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data);
          navigate('/admin');
        } catch (error) {
          console.error(error);
        }
      },
      onCancel() {
        console.log('Delete canceled');
      },
    });
  };

  showConfirm();
};

  const formattedDate = moment(data?.booking_date).format('MMM D');
  const formattedDate2 = moment(data?.created_at).format('MMM D');

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error.message}</div>;
  if (!data) return <div className="text-center mt-10">No data available</div>;


  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-10">
  <h1 className="text-center text-2xl font-bold text-[--headline] mb-6">Mijoz ma'lumotlari</h1>
  <Divider />
  <div className="grid grid-cols-2 gap-y-4 text-gray-700 mt-4">
    <p className="font-medium">Ism:</p>
    <p className="font-semibold text-[16px] text-right">{data.customer_name}</p>

    <p className="font-medium">Telefon raqami:</p>
    <a
      href={`tel:+998${data.customer_contact}`}
      className="font-semibold text-[16px] text-blue-600 hover:underline text-right"
    >
      +998 {data.customer_contact}
    </a>

    <p className="font-medium">Qabul kuni:</p>
    <p className="font-semibold text-[16px] text-right">{formattedDate}</p>

    <p className="font-medium">Qabul vaqti:</p>
    <p className="font-semibold text-[16px] text-right">{data.start_time.slice(0, 5)}</p>

    <p className="font-medium">Ro'yhatdan o'tgan vaqti:</p>
    <p className="font-semibold text-[16px] text-right">{formattedDate2}, {data.created_at.slice(11, 16)}</p>
  </div>
  <Divider/>
    <div className='flex items-center justify-between'>
      <Button  onClick={() => handleDeleteBooking(data.id)} type="dashed" danger className="">Bekor qilish</Button>
      <Button onClick={()=>{navigate('/admin') }} type="primary" className="">Qabul qilindi</Button>
    </div>
</div>

  )
}

export default SinglePage
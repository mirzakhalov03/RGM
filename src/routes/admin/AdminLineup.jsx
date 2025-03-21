import { BiPhoneCall } from "react-icons/bi"; 
import { MdDateRange } from "react-icons/md"; 
import { AiOutlineFieldTime } from "react-icons/ai"; 
import { AiOutlineFieldNumber } from "react-icons/ai"; 
import { Button, Table, Tag, Modal } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import moment from "moment";
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

  
const columns = [
  {
    title: <AiOutlineFieldNumber />,
    dataIndex: 'id',
    key: 'id',
  },
  
  {
    title: 'Name',
    dataIndex: 'customer_name',
    key: 'customer_name',
    render: (text, record) => <Link to={`${record.key}`}>{text}</Link>,
  },
  {
    title: <BiPhoneCall className="text-[20px]"/>,
    dataIndex: 'customer_contact',
    key: 'customer_contact',
    render: (text) => <a href={`tel:+998${text}`}>+998{text}</a>,
    responsive: ['md'],
  },
  {
    title: <MdDateRange className="text-[20px]"/>,
    dataIndex: 'booking_date',
    key: 'booking_date',
    sorter: (a, b) => new Date(a.booking_date) - new Date(b.booking_date),
    render: (date) => {
      const today = moment().startOf('day');
      const tomorrow = moment().add(1, 'day').startOf('day');
      const bookingDate = moment(date);

      if (bookingDate.isSame(today, 'day')) {
        return <Tag style={{ backgroundColor: 'limegreen', color: 'white', border: 'none' }}>Bugun</Tag>; 
      }
      if (bookingDate.isSame(tomorrow, 'day')) {
        return <Tag color="green">Ertaga</Tag>;
      }
      return <Tag color="geekblue">{bookingDate.format('MMM D')}</Tag>; 
    },
  },
  {
    title: <AiOutlineFieldTime className="text-[20px]"/>,
    dataIndex: 'start_time',
    key: 'start_time',
    sorter: (a, b) => new Date(`1970-01-01T${a.start_time}`) - new Date(`1970-01-01T${b.start_time}`), 
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <Button
        danger
        type="primary"
        className="w-[35px] bg-[lme] border-none"
        onClick={() => handleAction(record)} 
      >
        X
      </Button>
    ),
  },
];

  


const AdminLineup = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);






    const handleAction = async (record) => {

      const showConfirm = () => {
        confirm({
          title: "O'chirilsinmi?",
          icon: <ExclamationCircleOutlined/>,
          content: '',
          okText: "Ha, o'chirish",
          okType: "danger",
          cancelText: "Yo'q",
          onOk: async () => {
            try {
              const response = await axios.delete(`${import.meta.env.VITE_BACKEND_API}/${record.key}`, {
                headers: {
                  Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                  'Content-Type': 'application/json',
                },
              });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } catch (error) {
              console.error(error);
            }
          },
          onCancel() {
            console.log('Delete canceled');
          },

        })
      }
      showConfirm()

  }

    const columns = [
      {
        title: <AiOutlineFieldNumber />,
        dataIndex: 'id',
        key: 'id',
      },
      
      {
        title: 'Name',
        dataIndex: 'customer_name',
        key: 'customer_name',
        render: (text, record) => <Link to={`${record.key}`}>{text}</Link>,
      },
      {
        title: <BiPhoneCall className="text-[20px]"/>,
        dataIndex: 'customer_contact',
        key: 'customer_contact',
        render: (text) => <a href={`tel:+998${text}`}>+998{text}</a>,
        responsive: ['md'],
      },
      {
        title: <MdDateRange className="text-[20px]"/>,
        dataIndex: 'booking_date',
        key: 'booking_date',
        sorter: (a, b) => new Date(a.booking_date) - new Date(b.booking_date),
        render: (date) => {
          const today = moment().startOf('day');
          const tomorrow = moment().add(1, 'day').startOf('day');
          const bookingDate = moment(date);
    
          if (bookingDate.isSame(today, 'day')) {
            return <Tag style={{ backgroundColor: 'limegreen', color: 'white', border: 'none' }}>Bugun</Tag>; 
          }
          if (bookingDate.isSame(tomorrow, 'day')) {
            return <Tag color="green">Ertaga</Tag>;
          }
          return <Tag color="geekblue">{bookingDate.format('MMM D')}</Tag>; 
        },
      },
      {
        title: <AiOutlineFieldTime className="text-[20px]"/>,
        dataIndex: 'start_time',
        key: 'start_time',
        sorter: (a, b) => new Date(`1970-01-01T${a.start_time}`) - new Date(`1970-01-01T${b.start_time}`), 
      },
      {
        title: '',
        key: 'action',
        render: (text, record) => (
          <Button
            danger
            type="primary"
            className="w-[35px] bg-[lme] border-none"
            onClick={() => {
              console.log(record)
              handleAction(record)
            }} 
          >
            X
          </Button>
        ),
      },
    ];

    useEffect(() => {
        const token = import.meta.env.VITE_ACCESS_TOKEN

        const fetchData =  async ()  => {
            try{
                const response = await axios.get(import.meta.env.VITE_BACKEND_API, {
                    headers: {
                        Authorization: `Bearer ${token}`,
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
        const interval = setInterval(fetchData, 60000);

        return () => clearInterval(interval);
    },[])


    const dataSource = data?.data?.map((item, index) => ({
      key: item.id,
      id: index + 1, 
      customer_name: item.customer_name,
      customer_contact: item.customer_contact,
      booking_date: item.booking_date,
      start_time: item.start_time.slice(0, 5),
    }));

  
    const isMobile = window.innerWidth <= 500;


    

  return (
    <div>
        <h2 className='text-[24px] pl-1 pb-2 font-semibold text-[--softBlue]'>Qabul ro'yhati</h2>
        {isLoading ? (
          <p>Loading...</p> 
            ) : error ? (
              <p>Error fetching data: {error.message}</p>
            ) : (
              <Table
                dataSource={dataSource || []} 
                columns={columns}
              />
            )}
    </div>
  )
}

export default AdminLineup
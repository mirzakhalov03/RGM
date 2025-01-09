import { Table } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];



const AdminLineup = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = '-KXFcM-fic6woArgPKHosXW92IKUOhpqLUI0Ak5f'

        const fetchData =  async ()  => {
            try{
                const response = await axios.options("https://bookings.bekhruzbek.uz/v1/bookings/statistics", {
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
    },[])

    console.log(data)



  return (
    <div>
        <h2 className='text-[24px] pl-1 pb-2 font-semibold text-[--softBlue]'>Scheduled Appointments</h2>
        <Table dataSource={dataSource} columns={columns}/>
    </div>
  )
}

export default AdminLineup
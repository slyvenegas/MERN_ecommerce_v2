import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { FaEdit } from "react-icons/fa";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([])

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: 'include'
    })

    const dataResponse = await fetchData.json()

    if (dataResponse.success) {
      setAllUsers(dataResponse.data)
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }

    // console.log(dataResponse);



  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div className='bg-slate-100 pb-4'>
      <table className='w-full userTable'>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            allUser.map((el, index) => {
              return (
                <tr>
                  <td >{index + 1}</td>
                  <td >{el?.name}</td>
                  <td >{el?.email}</td>
                  <td >{el?.role}</td>
                  <td >{moment(el?.createdAt).format('LL')}</td>
                  <td>
                    <button className='bg-blue-200 p-3 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white'>
                      <FaEdit />
                    </button>

                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <ChangeUserRole/>
    </div>
  )
}

export default AllUsers
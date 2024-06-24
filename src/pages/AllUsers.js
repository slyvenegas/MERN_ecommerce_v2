import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'

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
      <table className='w-full userTable text-base font-medium'>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
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
                  <td >{el?.createdAt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
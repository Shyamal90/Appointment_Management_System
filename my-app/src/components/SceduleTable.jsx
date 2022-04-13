import React from 'react'
import {doctorDetatils} from '../data'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {storeDetails} from '../redux/action'
import styled from 'styled-components'


function SceduleTable() {
    
    const NavUnlisted = styled.ul`
      text-decoration: none
    `;


    const linkStyle = {
        textDecoration: "none",
        color: "white"
        
    }

    /*====================================================
                Handle Doctor Details
    ==================================================== */
    const dispatch = useDispatch();

    const  handleAppointmentData = (data) => {
        // console.log(data)
       dispatch(storeDetails(data))
    }
  return (
    <div className='doctor_schedule_container'>
      <h3>Doctor Schedule List</h3>
      <table  className='table_container'>
          <thead>
              <tr className='table_heading'>
                  <th>Id</th>
                  <th>Doctor's Name</th>
                  <th>Education</th>
                  <th>Speciality</th>
                  <th>Appointment Date</th>
                  <th>Appointment Day</th>
                  <th>Available Time</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {
                doctorDetatils.map((doctor)=>{
                    return (
                        <tr className='doctor_table_details'>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.education}</td>
                            <td>{doctor.speciality}</td>
                            <td>{doctor.appointment_date}</td>
                            <td>{doctor.appointment_day}</td>
                            <td>{doctor.available_time}</td>
                            <td>
                                <button onClick={()=>handleAppointmentData(doctor)} className="bookAppointmentBtn">
                                    <Link to="/book_appointment" style={linkStyle}>Book Appointment</Link>
                                    {/* Book Appointment */}
                                </button>
                            </td>
                        </tr>
                    )
                })
              }
          </tbody>
      </table>
    </div>
  )
}

export default SceduleTable

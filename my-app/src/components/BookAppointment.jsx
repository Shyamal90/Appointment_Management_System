import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {savePatientDetails} from '../redux/action'

function BookAppointment() {
    const store = useSelector((state) => state.details)
    console.log(store)
    const [patientName, setPatientName] = useState("");
    const [patientAge,setPatientAge] = useState();
    const [patientPhoneNo,setPatientPhoneNo] = useState();
    const [patientAddress,setPatientAddress] = useState("")
    const [bookSlot,setBookSlot] = useState("");


    const dispatch = useDispatch();


    /*===========================================================================
                     Handle Slot
    =============================================================================*/
    const handleSlot = (slot) => {
        setBookSlot(slot)
    }



    const handleBooking = () => {
        let patientDetl = {
            name : patientName,
            age : patientAge,
            phone : patientPhoneNo,
            address : patientAddress,
            slot : bookSlot
        }

      alert(`${patientName} , your appointment is confirmed!!!`)
        
    }

    return (
        <>
         <h3>Book Appointment</h3>
         <div className='bookAppointment_Container'>
            
            <div className='doctor_details'>
                <table className='doctor_datails_table'>
                    <thead>
                        <tr className='doctor_details_heading'>
                            <th>Doctor Name</th>
                            <th>Appointment Date</th>
                            <th>Appointment Day</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr className='doctor_details_body'>
                              <td>{store.name}</td>
                              <td>{store.appointment_date}</td>
                              <td>{store.appointment_day}</td>
                              <td>{store.fees}</td>
                          </tr>
                    </tbody>
                </table>

                

            </div>

            <div className="patientDetails">
                <h3>Patient Details</h3>
                <div className="patientName">
                    <strong>Name : </strong>
                    <input type="text" required value={patientName} placeholder="Enter Your Name" onChange={(event) => setPatientName(event.target.value)} />
                </div>
                <div className="patientAge">
                    <strong>Age : </strong>
                    <input type="number" required value={patientAge} placeholder="Enter Your Age" onChange={(event)=>setPatientAge(event.target.value)} />
                </div>
                <div className="patientContactNumber">
                    <strong>Phone No. : </strong>
                    <input type="number" required value={patientPhoneNo} placeholder="Enter Your Phone Number" onChange={(event)=>setPatientPhoneNo(event.target.value)}/>
                </div>

                <div className="patientAddress">
                    <strong>Address : </strong>
                    <textarea  cols="30" rows="10" value={patientAddress} onChange={(event)=>setPatientAddress(event.target.value)}></textarea>
                </div>

                <div className="chooseSlot">
                    <strong>Book Slot : </strong>
                    <select onChange={(event)=>handleSlot(event.target.value)} value={bookSlot}>
                        <option value="--">Select Slot</option>
                        <option value="12:00 - 12:20">12:00 - 12:20</option>
                        <option value="12:20 - 12:40">12:20 - 12:40</option>
                        <option value="12:40 - 01:00">12:40 - 01:00</option>
                        <option value="01:00 - 01:20">01:00 - 01:20</option>
                        <option value="01:20 - 01:40">01:20 - 01:40</option>
                        <option value="01:40 - 02:00">01:40 - 02:00</option>
                    </select>
                </div>


                <button className='conformBtn' onClick={()=>handleBooking()}>Conform Booking</button>
            </div>
        </div>
        </>
        
    )
}

export default BookAppointment

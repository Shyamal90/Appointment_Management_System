export const storeDetails = (data) => {
    return {
        type: "STORE_DETAILS",
        payload: data
    }
}


export const savePatientDetails = (data) =>{
    return {
        type : "SAVE_PATIENT_DETAILS",
        payload: data
    }
}
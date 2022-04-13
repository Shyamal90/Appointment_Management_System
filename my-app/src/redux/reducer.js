const initialState = {
    details:{},
    patientDetails: []
}

export const doctorReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case "STORE_DETAILS" :return {
            details: {...action.payload}
        }

        case "SAVE_PATIENT_DETAILS" : return {
            ...state,
            patientDetails : [...state.patientDetails, action.payload]
        }


        default : return state
    }
}
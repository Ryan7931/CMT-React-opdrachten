export const setUserProfile = (userProfile) => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
}

export const getUserProfile = () => {
    try {
        return JSON.parse(localStorage.getItem('userProfile')) || null
    } catch {
        return null
    }
}

export const setAppointments = (appointments) => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
}

export const getAppointments = () => {
    try {
        return JSON.parse(localStorage.getItem('appointments')) || []
    } catch {
        return []
    }
}
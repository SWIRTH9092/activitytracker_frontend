//----------------------
//  "Activity Tracker" Index page
//----------------------
const URL = "https://sw-activitytracker-bkend.onrender.com/";

export const indexLoader = async () => {
    const response = await fetch(URL + "/activity")
    const places = await response.json()
    return places
}
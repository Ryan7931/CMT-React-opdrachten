import "./app.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import UserProfileForm from "./components/UserProfile";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";
import "react-toastify/dist/ReactToastify.css";

const PROFILE_KEY = "userProfile";
const APPOINTMENTS_KEY = "appointments";

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // profiel laden
  useEffect(() => {
    const storedProfile = localStorage.getItem(PROFILE_KEY);
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }

    const storedAppointments =
      JSON.parse(localStorage.getItem(APPOINTMENTS_KEY)) || [];
    setAppointments(storedAppointments);
  }, []);

  return (
    <>
      <ToastContainer />

      {!userProfile ? (
        <UserProfileForm onSave={setUserProfile} />
      ) : (
        <div className="min-h-screen bg-zinc-900 text-white p-10">
          <h1 className="text-4xl font-bold mb-2">
            Welkom, {userProfile.name}
          </h1>

          <p className="text-zinc-400 mb-8">
            Boek en beheer je afspraken
          </p>

          <BookingForm
            userProfile={userProfile}
            appointments={appointments}
            setAppointments={setAppointments}
          />

          <BookingsList appointments={appointments} />
        </div>
      )}
    </>
  );
}

export default App;

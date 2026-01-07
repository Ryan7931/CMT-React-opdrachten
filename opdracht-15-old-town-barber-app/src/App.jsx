import "./app.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import UserProfileForm from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import "react-toastify/dist/ReactToastify.css";
import BookingForm from "./components/BookingForm";


const STORAGE_KEY = "userProfile";

function App() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem(STORAGE_KEY);
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <>
      <ToastContainer />

      {!userProfile ? (
        <UserProfileForm onSave={setUserProfile} />
      ) : (
        <>
          <h1>Welkom, {userProfile.name} 👋</h1>
          <ShopInfo />
          <BookingForm userProfile={userProfile} />
        </>
      )}
    </>
  );
}

export default App;

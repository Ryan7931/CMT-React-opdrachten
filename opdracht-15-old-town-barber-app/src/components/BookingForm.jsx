// src/components/BookingForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { services } from "../data/shopData";

const STORAGE_KEY = "appointments";

export default function BookingForm({ userProfile }) {
  // -----------------------------
  // 1. STATE (formulierwaarden)
  // -----------------------------
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // -----------------------------
  // 2. SUBMIT HANDLER
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // ❗ voorkomt page refresh

    // 2.1 Validatie
    if (!serviceId || !date || !time) {
      toast.error("Vul alle velden in");
      return;
    }

    // 2.2 Gekozen service ophalen
    const selectedService = services.find(
      (service) => service.id === Number(serviceId)
    );

    // 2.3 Afspraak object maken
    const newAppointment = {
      id: Date.now(),
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      price: selectedService.price,
      date,
      time,
    };

    // 2.4 Bestaande afspraken ophalen
    const existingAppointments =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // 2.5 Nieuwe afspraak toevoegen
    const updatedAppointments = [
      ...existingAppointments,
      newAppointment,
    ];

    // 2.6 Opslaan in localStorage
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedAppointments)
    );

    // 2.7 Feedback
    toast.success("Afspraak succesvol geboekt!");

    // (optioneel) formulier resetten
    setServiceId("");
    setDate("");
    setTime("");
  };

  // -----------------------------
  // 3. JSX (wat je ziet op scherm)
  // -----------------------------
  return (
    <form onSubmit={handleSubmit}>
      <h2>Afspraak boeken</h2>

      {/* User info (alleen lezen) */}
      <input value={userProfile.name} disabled />
      <input value={userProfile.email} disabled />
      <input value={userProfile.phone} disabled />

      {/* Service selectie */}
      <select
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
      >
        <option value="">Selecteer service</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name} (€{service.price})
          </option>
        ))}
      </select>

      {/* Datum */}
      <input
        type="date"
        value={date}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Tijd */}
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Selecteer tijd</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
      </select>

      <button type="submit">Boek afspraak</button>
    </form>
  );
}

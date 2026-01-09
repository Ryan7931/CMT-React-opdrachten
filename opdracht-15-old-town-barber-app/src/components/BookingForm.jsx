import { useState } from "react";
import { toast } from "react-toastify";
import { services } from "../data/shopData";

const STORAGE_KEY = "appointments";

export default function BookingForm({ userProfile }) {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // ⛔ geen page refresh

    // 1️⃣ validatie
    if (!serviceId || !date || !time) {
      toast.error("Vul alle velden in");
      return;
    }

    // 2️⃣ service info ophalen
    const service = services.find(
    (s) => s.id === Number(serviceId)
    );

    // 3️⃣ bestaande afspraken ophalen
    const existing =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // 4️⃣ nieuwe afspraak maken
    const newAppointment = {
      id: crypto.randomUUID(),
      serviceId: service.id,
      serviceName: service.name,
      price: service.price,
      date,
      time,
    };

    // 5️⃣ opslaan
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...existing, newAppointment])
    );

    // 6️⃣ UX
    toast.success("Afspraak succesvol geboekt");

    // 7️⃣ formulier reset
    setServiceId("");
    setDate("");
    setTime("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-6 rounded-2xl shadow-xl max-w-xl"
    >
      <h2 className="text-2xl font-semibold mb-6">
        Afspraak boeken
      </h2>

      <div className="space-y-4">
        <input
          value={userProfile.name}
          disabled
          className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-300"
        />

        <select
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-700 text-white"
        >
          <option value="">Selecteer service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} (€{s.price})
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-700 text-white"
        />

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-700 text-white"
        >
          <option value="">Selecteer tijd</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
        </select>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition"
        >
          Boek afspraak
        </button>
      </div>
    </form>
  );
}

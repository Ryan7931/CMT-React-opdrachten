// src/components/UserProfileForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const STORAGE_KEY = "userProfile";

export default function UserProfileForm({ onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!formData.name.trim()) return "Naam is verplicht";
    if (!formData.email.includes("@")) return "Ongeldig emailadres";
    if (!formData.phone.trim()) return "Telefoonnummer is verplicht";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    toast.success("Profiel succesvol opgeslagen!");
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profiel instellen</h2>

      <input
        name="name"
        placeholder="Naam"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Telefoon"
        value={formData.phone}
        onChange={handleChange}
      />

      <button type="submit">Opslaan</button>
    </form>
  );
}

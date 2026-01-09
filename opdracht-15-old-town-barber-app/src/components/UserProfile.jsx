export default function UserProfileForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const profile = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    localStorage.setItem("userProfile", JSON.stringify(profile));
    onSave(profile);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-white text-center">
          Fade & Blade
        </h1>

        <p className="text-zinc-400 text-center">
          Maak je profiel aan
        </p>

        <input
          name="name"
          placeholder="Naam"
          required
          className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <input
          name="phone"
          placeholder="Telefoon"
          required
          className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition">
          Opslaan
        </button>
      </form>
    </div>
  );
}

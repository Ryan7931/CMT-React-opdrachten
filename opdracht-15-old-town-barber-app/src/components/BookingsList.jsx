export default function BookingsList({ appointments }) {
  if (appointments.length === 0) {
    return (
      <div className="mt-10 text-zinc-400">
        Je hebt nog geen afspraken geboekt.
      </div>
    );
  }

  const sorted = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">
        Mijn afspraken
      </h2>

      <div className="space-y-4">
        {sorted.map((a) => (
          <div
            key={a.id}
            className="bg-zinc-800 p-5 rounded-xl shadow-lg flex justify-between"
          >
            <div>
              <p className="text-lg font-medium">
                {a.serviceName}
              </p>
              <p className="text-zinc-400 text-sm">
                {a.date} • {a.time}
              </p>
            </div>

            <div className="text-amber-400 font-semibold text-lg">
              €{a.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { shopInfo, services } from "../data/shopData";

export default function ShopInfo() {
  return (
    <section>
      <h2>{shopInfo.name}</h2>

      <h3>Openingstijden</h3>
      <ul>
        {Object.entries(shopInfo.openingHours).map(([day, hours]) => (
          <li key={day}>
            <strong>{day}:</strong> {hours}
          </li>
        ))}
      </ul>

      <h3>Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> – €{service.price} ({service.duration} min)
          </li>
        ))}
      </ul>
    </section>
  );
}

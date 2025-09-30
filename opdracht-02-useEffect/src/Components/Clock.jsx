import React, { useState, useEffect } from 'react';

function Clock() {
  // useState maakt een state-variabele aan voor de huidige tijd
  // currentTime bevat de tijd, setCurrentTime is de functie om de tijd te updaten
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // setInterval zorgt ervoor dat elke seconde de tijd wordt geüpdatet
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // update currentTime met de nieuwe tijd
    }, 1000);
    // return zorgt ervoor dat de interval wordt opgeruimd als het component verdwijnt
    return () => clearInterval(timer);
  }, []); // lege dependency array: effect wordt één keer uitgevoerd bij het laden

  return (
    <div>
      <h2>Huidige tijd:</h2>
      {/* toLocaleTimeString() zet het Date-object om naar een leesbare tijd */}
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;

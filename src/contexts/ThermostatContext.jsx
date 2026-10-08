import { useState } from 'react';
import { DEFAULT_TEMP, MAX_TEMP, MIN_TEMP, ThermostatContext } from './thermostat';

export function ThermostatProvider({ children }) {
  // l'unico stato del termostato: tutto il resto si calcola da qui
  const [temperature, setTemperature] = useState(DEFAULT_TEMP);

  // forma funzionale (prev => ...): parte sempre dal valore più recente e
  // Math.min/max tengono il valore nei limiti anche se la funzione è chiamata a mano
  const increase = () => setTemperature((prev) => Math.min(prev + 1, MAX_TEMP));
  const decrease = () => setTemperature((prev) => Math.max(prev - 1, MIN_TEMP));
  const reset = () => setTemperature(DEFAULT_TEMP);

  // derived state: calcolati a ogni render, nessun useState in più
  const isMin = temperature <= MIN_TEMP;
  const isMax = temperature >= MAX_TEMP;

  return (
    <ThermostatContext.Provider value={{ temperature, increase, decrease, reset, isMin, isMax }}>
      {children}
    </ThermostatContext.Provider>
  );
}

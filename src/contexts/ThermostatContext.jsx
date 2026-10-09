import { createContext, useContext, useState } from 'react';

export const MIN_TEMP = 16;
export const MAX_TEMP = 28;
export const DEFAULT_TEMP = 20;

// context, provider e hook stanno insieme in questo file dedicato
// oxlint-disable react/only-export-components -- la consegna chiede un file solo; il costo è che salvando questo file in sviluppo Vite deve ricaricare a caldo anche tutti i file che lo importano
const ThermostatContext = createContext(null);

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

// hook comodo: i componenti chiamano useThermostat() invece di useContext(...)
export function useThermostat() {
  const context = useContext(ThermostatContext);
  // fuori dal Provider il valore è null: senza questo controllo si avrebbe un TypeError poco chiaro
  // (Cannot destructure property ... of null) invece di un messaggio che spiega cosa fare
  if (!context) throw new Error('useThermostat va usato dentro <ThermostatProvider>');
  return context;
}

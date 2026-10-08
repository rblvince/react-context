import { createContext, useContext } from 'react';

export const MIN_TEMP = 16;
export const MAX_TEMP = 28;
export const DEFAULT_TEMP = 20;

// sta in un file a parte rispetto al Provider: la regola only-export-components
// vuole che un file .jsx esporti solo componenti (altrimenti il fast refresh si rompe)
export const ThermostatContext = createContext(null);

// hook comodo: i componenti chiamano useThermostat() invece di useContext(...)
export function useThermostat() {
  const context = useContext(ThermostatContext);
  // fuori dal Provider il valore è null: senza questo controllo si avrebbe un TypeError poco chiaro
  // (Cannot destructure property ... of null) invece di un messaggio che spiega cosa fare
  if (!context) throw new Error('useThermostat va usato dentro <ThermostatProvider>');
  return context;
}

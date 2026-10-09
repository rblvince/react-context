import { useThermostat } from '../contexts/ThermostatContext';
import { getLabel } from '../utils';

// stile comune ai tre bottoni (min-h-11 = 44px, bersaglio comodo da toccare);
// aria-disabled: rende il limite visibile e senza hover. Non uso disabled perché
// toglierebbe il fuoco al bottone premuto da tastiera (il fuoco cadrebbe su <body>)
const buttonClass =
  'min-h-11 rounded-md bg-slate-900 px-4 py-2 font-medium text-white not-aria-disabled:hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:not-aria-disabled:hover:bg-slate-300 aria-disabled:cursor-not-allowed aria-disabled:bg-slate-200 aria-disabled:text-slate-500 dark:aria-disabled:bg-slate-800 dark:aria-disabled:text-slate-400';

export default function ThermostatSection() {
  const { temperature, increase, decrease, reset, isMin, isMax } = useThermostat();

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Temperatura</h2>
      {/* aria-live: gli screen reader annunciano il nuovo valore; aria-atomic: leggono tutto ("21°C Comfort") */}
      <p aria-live="polite" aria-atomic="true" className="mb-6 flex items-baseline gap-3">
        <span className="text-5xl font-bold text-slate-900 dark:text-slate-100">{temperature}°C</span>
        {/* l'etichetta è calcolata qui nel render, senza un secondo stato */}
        <span className="text-lg text-slate-700 dark:text-slate-300">{getLabel(temperature)}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={decrease} aria-disabled={isMin} className={buttonClass}>Meno</button>
        <button type="button" onClick={increase} aria-disabled={isMax} className={buttonClass}>Più</button>
        <button type="button" onClick={reset} className={buttonClass}>Reset</button>
      </div>
    </section>
  );
}

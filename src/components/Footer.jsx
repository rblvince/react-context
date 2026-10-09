import { useThermostat } from '../contexts/ThermostatContext';

export default function Footer() {
  const { temperature } = useThermostat();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-4">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900">
          Termostato: {temperature}°C
        </span>
      </div>
    </footer>
  );
}

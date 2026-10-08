import { useThermostat } from '../contexts/thermostat';

export default function Sidebar() {
  // nessuna prop: la funzione reset arriva direttamente dal context
  const { reset } = useThermostat();

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 sm:w-48 sm:self-start">
      <h2 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Impostazioni</h2>
      <button
        type="button"
        onClick={reset}
        className="min-h-11 w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
      >
        Reset
      </button>
    </aside>
  );
}

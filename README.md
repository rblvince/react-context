# react-context

Esercizio Boolean sulla Context API di React: un termostato il cui stato è condiviso tra più componenti senza passare props.

## Stack

Vite + React + Tailwind CSS (`@tailwindcss/vite`).

## Cosa fa

- **Termostato**: mostra la temperatura e la cambia con i bottoni Meno, Più e Reset.
- **Limiti**: la temperatura resta tra 16 e 28 °C; al limite il bottone corrispondente risulta disattivato.
- **Etichetta**: accanto al valore compare Freddo, Comfort o Caldo, calcolata dalla temperatura.
- **Sidebar**: un secondo bottone Reset, in un componente lontano dal termostato.
- **Footer**: ripete la temperatura corrente.

## Come è fatto

- `src/contexts/ThermostatContext.jsx`: il `ThermostatProvider` tiene l'unico stato (`temperature`) e mette a disposizione `increase`, `decrease`, `reset`, `isMin` e `isMax`.
- `src/contexts/thermostat.js`: il context, le costanti e l'hook `useThermostat()`, che avvisa con un errore chiaro se usato fuori dal Provider.
- `src/utils.js`: `getLabel()`, funzione pura che dà l'etichetta; il suo test è in `src/utils.test.js`.
- `isMin`, `isMax` e l'etichetta sono valori derivati: si calcolano a ogni render, senza un secondo `useState`.

## Sviluppo

```bash
pnpm install
pnpm dev
```

## Test

```bash
pnpm test
```

// Funzione pura: l'etichetta si calcola dalla temperatura ogni volta che serve,
// non è uno stato (derived state)
export function getLabel(temperature) {
  if (temperature <= 18) return 'Freddo';
  if (temperature <= 23) return 'Comfort';
  return 'Caldo';
}

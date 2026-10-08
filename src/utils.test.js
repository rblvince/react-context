// controllo eseguibile con `pnpm test` (node --test, nessuna libreria)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getLabel } from './utils.js';

test('getLabel rispetta i confini fra Freddo, Comfort e Caldo', () => {
  assert.equal(getLabel(16), 'Freddo');
  assert.equal(getLabel(18), 'Freddo');
  assert.equal(getLabel(19), 'Comfort');
  assert.equal(getLabel(23), 'Comfort');
  assert.equal(getLabel(24), 'Caldo');
  assert.equal(getLabel(28), 'Caldo');
});

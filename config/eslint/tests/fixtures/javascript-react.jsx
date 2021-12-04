import { useState } from 'react';

export function UseTypescript() {
  const state = useState(true);
  return <div>{state ? 'YES' : 'NO'}</div>;
}

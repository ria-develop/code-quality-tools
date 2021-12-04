import { useState } from 'react';

export function UseTypescript(): JSX.Element {
  const state = useState(true);
  return <div>{state ? 'YES' : 'NO'}</div>;
}

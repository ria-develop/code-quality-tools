import { useCallback, useState } from 'react';

export const ArrowFunctionComponent = (props) => {
  const [state, setState] = useState();

  const onClick = useCallback(() => {
    if (state === 'CLOSED') {
      setState('OPENED');
    }
  }, [state]);

  // eslint-disable-next-line no-console
  console.log(props);
  // eslint-disable-next-line no-debugger
  debugger;
  return <div onClick={onClick} />;
};

import { useCallback, useState } from 'react';

type ArrowFunctionComponentProps = {
  name?: string;
};
export const ArrowFunctionComponent = (props: ArrowFunctionComponentProps): JSX.Element => {
  const [state, setState] = useState<string | undefined>(props.name);
  const onClick = useCallback(() => {
    if (state === 'CLOSED') {
      setState('OPENED');
    }
  }, [state]);
  return (
    <button onClick={onClick}>
      <img src="http://images/test.jpg" alt="" />
    </button>
  );
};

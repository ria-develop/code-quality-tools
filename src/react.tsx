import { useCallback, useState } from 'react';

type ArrowFunctionComponentProps = {
  name?: string;
};

export const ArrowFunctionComponent = (props: ArrowFunctionComponentProps): JSX.Element => {
  const [state, setState] = useState<string>();

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

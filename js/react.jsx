import {useCallback, useState} from 'react';

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
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={onClick}>
      <img src="http://images/test.jpg" alt="" />
    </div>
  );
};

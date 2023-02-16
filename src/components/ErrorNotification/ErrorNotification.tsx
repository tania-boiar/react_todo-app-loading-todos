import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';

type Props = {
  errorMessage: string,
};

export const ErrorNotification: React.FC<Props> = ({ errorMessage }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleCloseClick = () => {
    setIsHidden(true);
  };

  const closeNotification = useCallback(debounce(handleCloseClick, 3000), []);

  if (!isHidden) {
    closeNotification();
  }

  return (
    <div className={classNames(
      'notification is-danger is-light has-text-weight-normal',
      { hidden: isHidden },
    )}
    >
      <button
        type="button"
        aria-label="Close notification"
        className="delete"
        onClick={handleCloseClick}
      />

      {/* show only one message at a time */}
      { errorMessage }
      {/* Unable to add a todo
      <br />
      Unable to delete a todo
      <br />
      Unable to update a todo */}
    </div>
  );
};

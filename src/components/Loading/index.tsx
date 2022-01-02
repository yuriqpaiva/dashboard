import * as React from 'react';

import Loading from '../../styles/loading';

const LoadingScreen: React.FC = () => {
  return (
    <Loading>
      <img src="./loading.gif" alt="loadingSpinning" className="loadingImage" />
    </Loading>
  );
};

export default LoadingScreen;

// App.js
import React from 'react';
import TokenGenerator from './components/TokenGenerator';
import useTokenGenerator from './hooks/useTokenGenerator';

const App = () => {
  const {
    token,
    isValidToken,
    totalTokens,
    validTokens,
    validTokenList,
    generateSingleToken,
    validateToken,
    startTokenLoop,
    stopTokenLoop,
    validTokensList,
  } = useTokenGenerator();

  return (
    <TokenGenerator
      token={token}
      isValidToken={isValidToken}
      totalTokens={totalTokens}
      validTokens={validTokens}
      validTokenList={validTokenList}
      onGenerateSingleToken={generateSingleToken}
      onValidateToken={validateToken}
      onStartTokenLoop={startTokenLoop}
      onStopTokenLoop={stopTokenLoop}
      onValidTokensList={validTokensList}
    />
  );
};

export default App;

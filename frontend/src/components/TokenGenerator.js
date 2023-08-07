import React from 'react';

const TokenGenerator = ({
  token,
  isValidToken,
  totalTokens,
  validTokens,
  validTokenList,
  onGenerateSingleToken,
  onValidateToken,
  onStartTokenLoop,
  onStopTokenLoop,
  onValidTokensList,
}) => {
  return (
    <div className="App">
      <h1>Token Generator</h1>
      <button onClick={onGenerateSingleToken}>Generate Single Token</button>
      <button onClick={onValidateToken}>Validate Token</button>

      <p>Generated Token: {token}</p>
      {isValidToken !== null && (
        <p>Token is {isValidToken ? 'valid' : 'invalid'}.</p>
      )}

      <button onClick={onStartTokenLoop}>Start Infinite Token Loop</button>
      <button onClick={onStopTokenLoop}>Stop Token Loop</button>
      <button onClick={onValidTokensList}>Valid Token List</button>

      <p>Total Tokens: {totalTokens}</p>
      <p>Valid Tokens: {validTokens}</p>
      <p>Valid Token List: {validTokenList.map((i) => <p key={i}>{i}</p>)}</p>
    </div>
  );
};

export default TokenGenerator;

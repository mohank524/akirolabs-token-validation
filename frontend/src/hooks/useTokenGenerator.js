import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3001/api';

const useTokenGenerator = () => {
  const [token, setToken] = useState('');
  const [isValidToken, setIsValidToken] = useState(null);
  const [totalTokens, setTotalTokens] = useState(0);
  const [validTokens, setValidTokens] = useState(0);
  const [validTokenList, setValidTokenList] = useState([]);

  const generateSingleToken = () => {
    axios.post(`${BASE_URL}/generateToken`)
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateToken = () => {
    axios.post(`${BASE_URL}/validateToken`, { token })
      .then((response) => {
        setIsValidToken(response.data.isValid);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const startTokenLoop = () => {
    axios.post(`${BASE_URL}/startTokenLoop`)
      .then((response) => {
        console.log(response.data.message);
        setTotalTokens(0);
        setValidTokens(0);
        setIsValidToken(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const stopTokenLoop = () => {
    axios.post(`${BASE_URL}/stopTokenLoop`)
      .then((response) => {
        console.log(response.data.message);
        setTotalTokens(response.data.totalTokens);
        setValidTokens(response.data.validTokens);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validTokensList = () => {
    axios.get(`${BASE_URL}/tokens`)
      .then((response) => {
        setValidTokenList(response.data.tokens)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
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
  };
};

export default useTokenGenerator;

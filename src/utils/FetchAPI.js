const baseURL = import.meta.env.VITE_BASE_API_URL;

const sendRequest = async (url, method = "GET", data = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${baseURL}${url}`, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Si è verificato un errore");
    }

    return responseData;
  } catch (error) {
    console.error("Errore di rete:", error);
    throw new Error("Si è verificato un errore di rete");
  }
};

export { sendRequest };

// import { sendRequest } from './api';

// const fetchData = async () => {
//   try {
//     const result = await sendRequest('/data', 'GET');
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// const postData = async () => {
//   try {
//     const result = await sendRequest('/create', 'POST', { name: 'John' });
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// // Chiamare le funzioni di utilità nei punti appropriati del tuo codice.
// fetchData();
// postData();

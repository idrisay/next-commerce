// export const callAPI = async (url) => {
//   let loading = true;
//   let error = false;
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     loading = false;
//     return { loading, error, data: data };
//   } catch (err) {
//     loading = false;
//     error = err;
//     return { loading, error, data: false };
//   }
// };

import React, { useEffect, useState } from "react";

export const useCallApi = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const response = await res.json();
        setLoading(false);
        setData(response);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        setData([]);
      }
    })();
  }, []);

  return { data, error, loading };
};

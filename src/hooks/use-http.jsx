import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (url, reqConfig) => {
    setIsLoading(true);
    setError(null);
    const req = reqConfig
      ? {
          method: reqConfig.method || "GET",
          body: JSON.stringify(reqConfig.body),
          headers: reqConfig.method
            ? {
                "Content-Type": "application/json",
              }
            : {},
        }
      : { method: "GET" };

    fetch(url, req)
      .then((res) => {
        setIsLoading(false);
        if (!res.ok) {
          throw new Error("Request Failed");
        }
        console.log(res);
        res
          .json()
          .then((data) => {
            setData(data);
            console.log(data);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
            console.log(err);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, []);

  return { sendRequest, data, error, isLoading };
};

export default useHttp;

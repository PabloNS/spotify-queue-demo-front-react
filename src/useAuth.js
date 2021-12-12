import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/spotify/token?code=" + code)
      .then((response) => {

        // If success then cut the code string from the URL and execute the other thing
        window.history.pushState({}, null, "/");

        console.log(response.data);
        setAccessToken(response.data.accessToken);

      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        window.location = "/";
      });
  }, [code]);

  return accessToken
}
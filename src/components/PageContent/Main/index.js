import UserInput from "./UserInput";
import UserInfo from "./UserInfo";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main({ darkMode }) {
  const [githubUser, setGithubUser] = useState("");
  const [dataResponse, setDataResponse] = useState(null);
  const [noResult, setNoResult] = useState(null);

  useEffect(() => {
    if (githubUser) {
      axios
        .get(`https://api.github.com/users/${githubUser}`)
        .then(function (response) {
          setDataResponse(response);
          setNoResult(null);
        })
        .catch(function (error) {
          setNoResult(error);
        });
    }
  }, [githubUser]);

  return (
    <>
      <UserInput
        githubUser={githubUser}
        setGithubUser={setGithubUser}
        noResult={noResult}
        darkMode={darkMode}
      />
      {dataResponse ? (
        <UserInfo dataResponse={dataResponse} darkMode={darkMode} />
      ) : null}
    </>
  );
}

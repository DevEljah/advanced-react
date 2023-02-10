import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState({});
  // const { name, avatar_url, company, html_url } = user;
  // It's recommended to destructure it before the last "return" !

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        // const data = await res.json();
        // setUser(data);
        // console.log(data);

        // <> with Axios this isnt the case! //
        console.log(res); // "!res.ok" ! //
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await res.json();
        setUser(data);
        console.log(data);
        // with Axios this isnt the case! </>//
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h4>Loading ...</h4>;
  }
  if (isError) {
    return <h4> Thers is an Error</h4>;
  }

  const { name, avatar_url, company, html_url } = user;
  return (
    <div>
      <h2>Fetch Data</h2>
      <div>
        <img src={avatar_url} alt="img" />
        <h4>{name}</h4>
        <h4>{company}</h4>
        <a href={html_url}>Profile</a>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;

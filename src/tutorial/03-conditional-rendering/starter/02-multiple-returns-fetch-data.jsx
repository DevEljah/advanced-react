import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setUser(data);
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

  return (
    <div>
      <h2>Fetch Data</h2>
      <div>
        <img src={user.avatar_url} alt="img" />
        <h4>{user.name}</h4>
        <h4>{user.company}</h4>
        <a href={user.html_url}>Profile</a>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;

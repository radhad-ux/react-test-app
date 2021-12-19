import { useState, useEffect } from "react";
//https://api.github.com/users/
function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h2>{data.name}</h2>
        <p>{data.location}</p>
        <img src={data.avatar_url} alt="Eve Porcello" />
      </div>
    );
  } else {
    return <div>No User Found</div>;
  }
}
export default App;

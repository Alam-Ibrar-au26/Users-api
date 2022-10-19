import "./App.css";
import { useEffect, useState } from "react";

function App() {

  //Calling api with hook useEffect to manage side effect of component
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUser(res);
      });
  }, []);

  // Mapping the data from api & return the data in elements
  return (
    <div className="user">
      {user.map((user) => {
        return (
          <div className="user-container">
            <img src={user.avatar_url} alt={user.avatar_url} />
            <p className="title">{user.login}</p>
            <div className="btn">
              {" "}
              <a href={`${user.html_url}?tab=repositories`} className="anchor">
                Repos
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

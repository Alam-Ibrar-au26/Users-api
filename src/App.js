import "./App.css";
import { useEffect, useState } from "react";

function App() {
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

// "login": "mojombo",
//     "id": 1,
//     "node_id": "MDQ6VXNlcjE=",
//     "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/mojombo",
//     "html_url": "https://github.com/mojombo",
//     "followers_url": "https://api.github.com/users/mojombo/followers",
//     "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//     "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//     "organizations_url": "https://api.github.com/users/mojombo/orgs",
//     "repos_url": "https://api.github.com/users/mojombo/repos",
//     "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/mojombo/received_events",
//     "type": "User",
//     "site_admin": false

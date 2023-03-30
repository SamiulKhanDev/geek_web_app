import React from "react";
import { useEffect, useState } from "react";
import Card from "../../Coponents/Card/Card";
import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [num, setNum] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
      setFilterUsers(data);
      setNum("30");
    }
    getData();
  }, []);
  useEffect(() => {
    const number = parseInt(num);
    if (number < 0 || number > users.length) return;
    const data = users.slice(0, number);
    setFilterUsers(data);
  }, [num]);
  return (
    <div className="main_container">
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />

      <div className="main_container_main">
        {filterUsers.map((user) => {
          return (
            <Card
              key={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;

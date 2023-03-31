import React from "react";
import { useEffect, useState } from "react";
import Card from "../../Coponents/Card/Card";
import "./Main.css";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [filterUsersByName, setFilterUsersByName] = useState([]);
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
      setFilterUsers(data);
      setFilterUsersByName(data);
      setNum("30");
    }
    getData();
  }, []);
  useEffect(() => {
    const number = parseInt(num);
    if (number < 0 || number > users.length) return;
    const data = users.slice(0, number);
    setFilterUsers(data);
    setFilterUsersByName(data);
    setName("");
  }, [num]);
  useEffect(() => {
    if (!name) {
      setFilterUsersByName([...filterUsers]);
      return;
    }
    setFilterUsersByName(
      filterUsers.filter((user) => {
        return user.login.substring(0, name.length) === name;
      })
    );
  }, [name]);
  return (
    <div className="main_container">
      <div className="main_container_inputs">
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="main_container_main">
        {filterUsersByName.map((user) => {
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

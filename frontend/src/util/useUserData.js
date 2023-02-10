import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

function FindUserByEmail({ email }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetch(`/api/admin/getUser/${email}`).then((response) => {
        response.json().then((data) => {
          setUser(data);
        });
      });
    };

    fetchData();
  }, [email]);

  return user;
}

function useLoggedInUser() {
  const userDecoded = jwtDecode(localStorage.getItem("jwt"));
  const userEmail = userDecoded.sub;

  const loggedUser = FindUserByEmail({ email: userEmail });

  return loggedUser;
}

function useAllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/admin/getAllUsers");
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return users;
}

function FindAddressById({ id }) {
  const [address, setAddress] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      fetch(`/api/admin/getAddress/${id}`).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setAddress(data);
        });
      });
    };
    fetchData();
  }, []);

  return address;
}

export { useLoggedInUser, FindAddressById, useAllUsers };

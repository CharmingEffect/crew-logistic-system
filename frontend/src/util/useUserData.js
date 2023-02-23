import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import BASE_URL from "../util/baseUrl";

const FindUserByEmail = ({ email }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      fetch(BASE_URL + `/api/admin/getUser/${email}`).then((response) => {
        response.json().then((data) => {
          setUser(data);
        });
      });
    };
    fetchData();
  }, []);

  return user;
};

const useLoggedInUser = () => {
  const userDecoded = jwtDecode(localStorage.getItem("jwt"));

  const userEmail = userDecoded.sub;

  const loggedUser = FindUserByEmail({ email: userEmail });
  return loggedUser;
};

function useAllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL + "/api/admin/getAllUsers");
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
      fetch(BASE_URL + `/api/admin/getAddress/${id}`).then((response) => {
        response.json().then((data) => {
          setAddress(data);
        });
      });
    };
    fetchData();
  }, []);

  return address;
}

function SystemInfo() {
  const [systemInfo, setSystemInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL + "/api/admin/systemStatus");
        setSystemInfo(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return systemInfo;
}

function MemoryStats() {
  const [memoryStats, setMemoryStats] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL + "/api/admin/memory-status");
        setMemoryStats(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return memoryStats;
}

export {
  useLoggedInUser,
  FindAddressById,
  useAllUsers,
  SystemInfo,
  MemoryStats,
};

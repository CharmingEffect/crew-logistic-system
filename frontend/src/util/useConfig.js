import { useLoggedInUser } from "./useUserData";

function useValidPahts() {
  const adminValidPaths = [
    "/",
    "/dashboard-admin",
    "/user-mngmt",
    "/job-mngmt",
    "/profile",
  ];
  const crewValidPaths = ["/", , "/dashboard-crew", "/profile"];

  const loggedInUser = useLoggedInUser();


  
  if (loggedInUser.role === "ADMIN") {
    return adminValidPaths;
  } else if (loggedInUser.role === "CEW_MEMBER") {
    return crewValidPaths;
  } else {
    return [];
  }
}

export { useValidPahts };

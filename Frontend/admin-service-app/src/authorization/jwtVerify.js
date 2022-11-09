const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  export const AuthVerify = () => {
  
      const user = localStorage.getItem("token");
  
      if (user) {
        const decodedJwt = parseJwt(user);
  
        if (decodedJwt.exp * 1000 < Date.now()) {
          return false
        }
        return true
      }
  
  };
  

import history from "../../routes/History";
export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
    request.headers["Accept-Language"] = localStorage.getItem('lang');
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    // handle succes 
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    // handle errors
    if(error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("loginMicrosoftMsal");
      localStorage.removeItem("loginApiUserData");
      localStorage.removeItem("microsoftLoginData");
      history.push({
        pathname: "/",
        state: {
          from: "logout",
        },
      });

    }
  }
  return Promise.reject({ ...error });
};
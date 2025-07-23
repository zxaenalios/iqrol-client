import axios from 'axios';

export const users = async () => {
    try {
      const response = await axios({
        timeout: 15000,
        method: 'get',
        url: import.meta.env.VITE_API_IQROL_SERVER + `/users`
      })
      return response
    } catch(error) {
      if (error.response) {
        return error.response;
      } else if (error.code === 'ECONNABORTED') {
        return ('request timeout');
      } else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    }
}
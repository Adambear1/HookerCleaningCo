import axios from "axios";
export default {
  postInquire: (data) => {
    return axios.post("http://localhost:3000/api/inquire", data);
  },
  sendEmail: (data) => {
    return axios.post("http://localhost:3000/api/sendEmail", data);
  },
};

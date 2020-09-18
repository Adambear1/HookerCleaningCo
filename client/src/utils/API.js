import axios from "axios";
export default {
  postInquire: (data) => {
    return axios.post("/api/inquire", data);
  },
  sendEmail: (data) => {
    return axios.post("/api/sendEmail", data);
  },
  careers: (data) => {
    return axios.post("/api/careers", data);
  },
};

import axios from "axios";
export default {
  // Needed sign-up -
  postInquire: (data) => {
    return axios.post("http://localhost:3000/api/inquire", data);
  },
};

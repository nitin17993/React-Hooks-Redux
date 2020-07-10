import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ARzCOV74J78I_uZShA8pFG0Cc7S8BXj45qzKVAKJoEE",
  },
});

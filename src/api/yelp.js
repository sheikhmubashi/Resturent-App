import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VDfb0oUsw7QdTz0Tgd1hpiXwshMo2noom64-UOB-WG8GDSz-z1YKO_-d7vnERl8G0VzpdK29H3geyGUHYG6q_xhxM-pzECsS2SV5t2OrD2_QORPp06Kx-bvIQe1jYXYx",
  },
});

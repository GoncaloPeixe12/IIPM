import axios from "axios";

const KEY = "dfhdvfnjbn";

export default axios.create({
  baseURL: "https://image.maps.api.here.com",
  params: {
    app_id: "p3ovXxZETHPAr01Tp72k",
    app_code: "pi4DDl0CRUHCbowFIMreXg",
    lat: "52.518752",
    lon: "13.402277"
  }
});

import axios from "axios";

const BASE_URL = "http://172.20.10.5:1337/api";
const API_KEY =
  "14bbc958a39406c8631215613542d9885cd60acad422fbe71d60bfec26d8de7d16e387dafc1438a8aead07ec69a3c8ba2a3e382d94dc774b2dcaf273769209ae4faa72364249d9f908af03716f610b027474d9d8d6b65c4264cfec22e77ff63c91c7149dc50b127af621ed6067a2928097263b78a150eb5ebc2d3f186c556005";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

const getSlider = () => AxiosInstance.get("/sliders?populate=*");

const getCategories = () => AxiosInstance.get("/categories?populate=*");

const getPremiumHospitals = () =>
  AxiosInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*");

const getHospitalsByCategory = (category) =>
  AxiosInstance.get(
    "/hospitals?filters[categories][Name][$in]=" + category + "&populate=*"
  );
const getDoctorsByCategory = (category) =>
  AxiosInstance.get(
    `/doctors?filters[category][Name][$eq]=${category}&populate=*`
  );

export default {
  getSlider,
  getCategories,
  getPremiumHospitals,
  getHospitalsByCategory,
  getDoctorsByCategory,
};

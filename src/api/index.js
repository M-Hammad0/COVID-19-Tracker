import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let customUrl = url;
  if(country){
    customUrl = `${url}/countries/${country}`;
  }
  try {
    const { data } = await axios.get(customUrl);

    const info = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };

    return info;
  } catch (error) {console.log(error)}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  } catch (error) {console.log(error)}
};

export const fetchCountries = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);

  } catch (error) {
    console.log(error);
  }
}

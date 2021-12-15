import axios from "axios";

export async function fetchData() {
  const res = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
  );
  return res.data;
}

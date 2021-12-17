import axios from "axios";

export async function fetchProvinceName() {
  const res = await axios.get(
    "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json"
  );
  return res.data;
}

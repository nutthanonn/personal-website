import axios from "axios";

export async function fetchDataTimeLineCaseByProvince() {
  const res = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces"
  );
  return res.data;
}

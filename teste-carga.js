import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 500,
  duration: '5m',
};

export default function () {
  const BASE_URL = __ENV.URL

  const res = http.get(BASE_URL);
  check(res, { 'Validar se status é igual a 200': (r) => r.status === 200 });
  sleep(1);
}

export function handleSummary(data) {
  return {
    "./reports/report.html": htmlReport(data),
  };
}
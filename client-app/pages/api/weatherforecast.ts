// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';
import fs from 'fs';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const httpsAgentForAPI = new https.Agent({
    //ca: fs.readFileSync('/etc/pki/tls/certs/daidai_ca.crt'),
    // cert: fs.readFileSync('C:/Users/chou/AppData/Roaming/ASP.NET/https/my_new_app_react.pem'),
    // key: fs.readFileSync('C:/Users/chou/AppData/Roaming/ASP.NET/https/my_new_app_react.key'),
    rejectUnauthorized: false   // FIXME: しないと[self signed certificate]
  });

  axios.defaults.baseURL = "https://localhost:7239"

  // axios.defaults.baseURL = "http://localhost:5169"

  const response = await axios.get('/api/WeatherForecast', {httpsAgent: httpsAgentForAPI})

  // const response = await axios.get('/api/WeatherForecast')
  const { data } = response
  res.status(200).json(data)
}

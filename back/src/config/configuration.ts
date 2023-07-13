// import * as fs from 'fs';
import { trendDatas } from './trendData';
export default () => {
  // const trendDatasJSON = fs.readFileSync('./trendData.json', 'utf-8');
  // const trendDatas = JSON.parse(trendDatasJSON);

  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
    },
    trendDatas,
  };
};

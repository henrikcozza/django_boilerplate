import GetHome from "./scenarios/GetHome.js";
import { group, sleep } from 'k6';


export default () => {
    group('Endpoint Get Home - Home page - Promotion Site', () => {
        GetHome();
    });

    sleep(1);
}
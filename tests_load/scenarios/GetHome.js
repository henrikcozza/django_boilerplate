import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { check, fail } from 'k6';

export let GetHomeDuration = new Trend('get_home_duration');
export let GetHomeFailRate = new Trend('get_home_fail_rate');
export let GetHomeSuccessRate = new Trend('get_home_success_rate');
export let GetHomeReqs = new Trend('get_home_reqs');

export default () => {
    let res = http.get('http://localhost/');

    GetHomeDuration.add(res.timings.duration);
    GetHomeReqs.add(1);
    GetHomeFailRate.add(res.status == 0 || res.status > 399);
    GetHomeSuccessRate.add(res.status < 399);

    let durationMsg = "Max Duration ${4000/1000}s";
    if (!check(res, {
        "max duration": (r) => r.timings.duration < 4000,
    })) {
        fail(durationMsg);
    }

    sleep(1);
}
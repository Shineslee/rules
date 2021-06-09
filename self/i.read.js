//body = $response.body.replace(/expiredTime":\d+, 'expiredTime":2998743249).replace(/expired":\d+, 'expired":0').replace(/remainTime":\d+, 'remainTime":2998743249');
//$done({body});
/*

QX:
[rewrite_local]
#解锁会员
^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body https://raw.githubusercontent.com/Shineslee/rules/master/self/i.read.js

[mitm]
hostname = i.weread.qq.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "expiredTime": 2998743249,
  "expired": 0,
  "remainTime": 2998743249,
 };

$done({body: JSON.stringify(obj)});

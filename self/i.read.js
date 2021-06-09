
//body = $response.body.replace("expiredTime":\d+, "expiredTime":2998743249).replace("expired":\d+, "expired":0).replace（"remainTime":\d+, "remainTime":2998743249);
//$done({body});

let obj = JSON.parse($response.body);
obj = {
  "expiredTime":2998743249,
  "expired":0,
  "isPaying":1,
  "remainTime":2998743249,
  "payingRemainTime": 0,
  "isAutoRenewable": 0,
  "historyAutoRenewable": 0,
  "autoRenewableChannel": 0,
  "autoRenewableTime": 0,
  "autoRenewablePrice": 1900,
  "savedMoney": 22266,
  "totalFreeReadDay": 0,
  "remainCoupon": 0,
  "remainCount": 0 
 };
 
 $done({body: JSON.stringify(obj)});

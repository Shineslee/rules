
//body = $response.body.replace("expiredTime":\d+, "expiredTime":2998743249).replace("expired":\d+, "expired":0).replace（"remainTime":\d+, "remainTime":2998743249);
//$done({body});

body = $response.body;

let obj = JSON.parse(body);
obj.expiredTime=2998743249;
obj.expired=0;
obj.isPaying=1;
obj.remainTime=2998743249;

body = JSON.stringify(obj);

$done(body);

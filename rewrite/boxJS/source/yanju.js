let requestUrl = $request.url;
if (/^http:\/\/.+.wscreativity\.com\/yanju\/.+\.(jpg|png)?/.test(requestUrl)) {
  if ($request.headers["User-Agent"].indexOf("yanju") != -1) {
    $notify("捕获到当前图片链接❗️", "", "点击跳转浏览器查看❗️", {
      "open-url": requestUrl,
    });
  }
  $done(JSON.stringify($request));
}
var obj = JSON.parse(
  $response.body.replace(/\"productType\":\w+/g, '"productType":1')
);
$done({ body: JSON.stringify(obj) });

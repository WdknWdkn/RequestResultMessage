const re = {
  status: "RESULT_FAIL",
  message: "リクエストに失敗しました",
  errorToList: ["toUserA", "toUserB"]
};

console.log(resultMessage(re));

function resultMessage(re) {
  if (re.status === "RESULT_FAIL") {
    let errorMsg = "リクエスト送信に失敗しました。";
    if (re.errorToList === undefined) {
      return errorMsg;
    }

    Object.keys(re.errorToList).forEach(function (key) {
      if (re.errorToList[key] === "toUserA") {
        errorMsg += "\n・A様宛";
      }
      if (re.errorToList[key] === "toUserB") {
        errorMsg += "\n・B様宛";
      }
    });
    return errorMsg;
  } else {
    return "送信しました。";
  }
}

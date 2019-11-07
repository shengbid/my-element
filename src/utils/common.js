export default {
  // 限制只能输入数字(可以输入两位小数点)
  limitInputPointNumber(val) {
    if (val === 0 || val === "0" || val === "" || val === undefined) {
      return "";
    } else {
      let value = null;
      value = val.replace(/[^\d.]/g, ""); // 清除“数字”和“.”以外的字符
      value = value.replace(/\.{2,}/g, "."); // 只保留第一个. 清除多余的
      value = value
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
      value = value.replace(/^(-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); // 只能输入两个小数
      return value;
    }
  }
}
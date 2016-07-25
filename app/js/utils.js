export default class is {
  static none(testValue) {
    return !testValue && typeof testValue === "object";
  }
  static object(testValue) {
    return !!testValue && typeof testValue === "object" && testValue.constructor !== Array;
  }
  static array(testValue) {
    return is.object(testValue) && testValue.constructor === Array;
  }
  static callable(testValue) {
    return typeof testValue === "function";
  }
  static defined(testValue) {
    return typeof testValue !== "undefined";
  }
  static string(testValue) {
    return typeof testValue === "string";
  }
  static number(testValue) {
    return typeof testValue === "number" && !Number.isNaN(testValue);
  }
  static a(testValue, typeConstructor) {
    return (is.object(testValue) || is.callable(testValue)) && testValue.constructor === typeConstructor;
  }
}

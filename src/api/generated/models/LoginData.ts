/* tslint:disable */
/* eslint-disable */
/**
 * ETN Device Checker Test
 * Simple API for the Device Checker application, used to manage borrowed mobile phones.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface LoginData
 */
export interface LoginData {
  /**
   *
   * @type {string}
   * @memberof LoginData
   */
  login?: string;
  /**
   *
   * @type {string}
   * @memberof LoginData
   */
  password?: string;
}

export function LoginDataFromJSON(json: any): LoginData {
  return LoginDataFromJSONTyped(json, false);
}

export function LoginDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LoginData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    login: !exists(json, "login") ? undefined : json["login"],
    password: !exists(json, "password") ? undefined : json["password"],
  };
}

export function LoginDataToJSON(value?: LoginData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    login: value.login,
    password: value.password,
  };
}
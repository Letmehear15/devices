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
 * @interface EditPhone
 */
export interface EditPhone {
  /**
   *
   * @type {string}
   * @memberof EditPhone
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof EditPhone
   */
  os?: EditPhoneOsEnum;
  /**
   *
   * @type {string}
   * @memberof EditPhone
   */
  vendor?: string;
  /**
   *
   * @type {string}
   * @memberof EditPhone
   */
  model?: string;
  /**
   *
   * @type {string}
   * @memberof EditPhone
   */
  osVersion?: string;
  /**
   *
   * @type {string}
   * @memberof EditPhone
   */
  image?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum EditPhoneOsEnum {
  Android = "ANDROID",
  Ios = "IOS",
  Windows = "WINDOWS",
}

export function EditPhoneFromJSON(json: any): EditPhone {
  return EditPhoneFromJSONTyped(json, false);
}

export function EditPhoneFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EditPhone {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    code: !exists(json, "code") ? undefined : json["code"],
    os: !exists(json, "os") ? undefined : json["os"],
    vendor: !exists(json, "vendor") ? undefined : json["vendor"],
    model: !exists(json, "model") ? undefined : json["model"],
    osVersion: !exists(json, "osVersion") ? undefined : json["osVersion"],
    image: !exists(json, "image") ? undefined : json["image"],
  };
}

export function EditPhoneToJSON(value?: EditPhone | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    code: value.code,
    os: value.os,
    vendor: value.vendor,
    model: value.model,
    osVersion: value.osVersion,
    image: value.image,
  };
}

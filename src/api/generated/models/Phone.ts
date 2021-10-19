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
import {
  BorrowedObj,
  BorrowedObjFromJSON,
  BorrowedObjFromJSONTyped,
  BorrowedObjToJSON,
} from "./";

/**
 *
 * @export
 * @interface Phone
 */
export interface Phone {
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  os?: PhoneOsEnum;
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  vendor?: string;
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  model?: string;
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  osVersion?: string;
  /**
   *
   * @type {string}
   * @memberof Phone
   */
  image?: string;
  /**
   *
   * @type {BorrowedObj}
   * @memberof Phone
   */
  borrowed?: BorrowedObj;
}

/**
 * @export
 * @enum {string}
 */
export enum PhoneOsEnum {
  Android = "ANDROID",
  Ios = "IOS",
  Windows = "WINDOWS",
}

export function PhoneFromJSON(json: any): Phone {
  return PhoneFromJSONTyped(json, false);
}

export function PhoneFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Phone {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    code: !exists(json, "code") ? undefined : json["code"],
    os: !exists(json, "os") ? undefined : json["os"],
    vendor: !exists(json, "vendor") ? undefined : json["vendor"],
    model: !exists(json, "model") ? undefined : json["model"],
    osVersion: !exists(json, "osVersion") ? undefined : json["osVersion"],
    image: !exists(json, "image") ? undefined : json["image"],
    borrowed: !exists(json, "borrowed")
      ? undefined
      : BorrowedObjFromJSON(json["borrowed"]),
  };
}

export function PhoneToJSON(value?: Phone | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    code: value.code,
    os: value.os,
    vendor: value.vendor,
    model: value.model,
    osVersion: value.osVersion,
    image: value.image,
    borrowed: BorrowedObjToJSON(value.borrowed),
  };
}
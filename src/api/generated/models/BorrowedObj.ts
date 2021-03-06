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
import { User, UserFromJSON, UserFromJSONTyped, UserToJSON } from "./";

/**
 *
 * @export
 * @interface BorrowedObj
 */
export interface BorrowedObj {
  /**
   *
   * @type {User}
   * @memberof BorrowedObj
   */
  user?: User;
  /**
   *
   * @type {number}
   * @memberof BorrowedObj
   */
  date?: number;
}

export function BorrowedObjFromJSON(json: any): BorrowedObj {
  return BorrowedObjFromJSONTyped(json, false);
}

export function BorrowedObjFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BorrowedObj {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    user: !exists(json, "user") ? undefined : UserFromJSON(json["user"]),
    date: !exists(json, "date") ? undefined : json["date"],
  };
}

export function BorrowedObjToJSON(value?: BorrowedObj | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    user: UserToJSON(value.user),
    date: value.date,
  };
}

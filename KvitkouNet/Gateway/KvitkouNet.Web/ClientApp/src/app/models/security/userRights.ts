/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AccessFunction } from './accessFunction';
import { AccessRight } from './accessRight';
import { Role } from './role';


export interface UserRights {

    userId?: string;
    userLogin?: string;
    accessRights?: Array<AccessRight>;
    deniedRights?: Array<AccessRight>;
    accessFunctions?: Array<AccessFunction>;
    roles?: Array<Role>;
}

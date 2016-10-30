import {OpaqueToken} from "@angular/core";

export const RESTANGULAR = new OpaqueToken('restangularWithConfig');

export function RestangularFactory(configFn) {
  return () => {
    return configFn;
  };
}
import { KeycloakConfig } from 'keycloak-angular';


let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth/',
  realm: "ciox",//location.href.split(".")[0].split("//")[1],
  clientId:"ciox" //location.href.split(".")[0].split("//")[1]
};


export const environment = {
  production: true,
  keycloak: keycloakConfig

};
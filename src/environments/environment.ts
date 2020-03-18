// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'jwz5_OKogSjKukVPFjC3AlJLeoOlEePLxcjA8YFiAXc',
  client_secret: 'VfbdVMYZvnYgV_EcTE9SvmL5deIk5VT16JApACciik64IVAjhGPbx0dpZV8FtFcOzH80LqFrqOBT1PdjirIjYg',
  redirect_uri: 'http://localhost:4200/home',
  // tslint:disable-next-line: max-line-length
  RefreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRktFbU9oSCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE1OTE4ODUwMDAsImlhdCI6MTU4NDEwOTAwMCwic2NvcGUiOiJvcGVuaWQifQ.VsGxFsj54I2FyOOwvlRPKpip5W-GQteLPZTZaVhQeCECjQ1EhsZKvAqUpc6Mx6pHkQOXLh_-Bg6BQ1jn1w6-CKzsFzmDo5fDgMK2XcmORer-gDVRzii-YeSjwZ2Bga9mVzw-b8Cq8bQYxbeCrcBb64EUMKOTMzO68YhFlYujFqVTIk5isFt1LhA9dYv-paINvRlgVuw52b2TNNTmp97L74ZueoOT9LldbkfQVN6luie0c2j8I-QQwOOETsUKb66rxLmpnnCpC7GFBn9yh_Csnu_UqWH_fKsdMJ3sDdSJyH3KJwLDQxSlGuYVElehNYrIpadvO2qKmR-PBBujrXvhYw',
  issuer: 'https://account.hubstaff.com',
  authorization_endpoint: 'https://account.hubstaff.com/authorizations/new',
  jwks_uri: 'https://account.hubstaff.com/jwks.json',
  response_types_supported: 'code',
  subject_types_supported: ['public', 'pairwise'],
  id_token_signing_alg_values_supported: ['RS256'],
  token_endpoint: 'https://account.hubstaff.com/access_tokens',
  userinfo_endpoint: 'https://account.hubstaff.com/user_info',
  scopes_supported: 'openid profile email tasks:read tasks:write hubstaff:read hubstaff:write',
  grant_types_supported: ['authorization_code', 'refresh_token'],
  request_object_signing_alg_values_supported: ['HS256', 'HS384', 'HS512'],
  token_endpoint_auth_methods_supported: ['client_secret_basic', 'client_secret_post'],
  claims_supported: ['sub', 'iss', 'name', 'email']

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

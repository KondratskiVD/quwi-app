// notifications
import { ToastProgrammatic as Toast } from 'buefy';

const authErrors = {
  'auth/code-expired': 'The SMS code has expired. Please re-send the verification code to try again.',
  'auth/admin-restricted-operation': 'This operation is restricted to administrators only.',
  'auth/cors-unsupported': 'This browser is not supported.',
  'auth/credential-already-in-use': 'This credential is already in use.',
  'auth/custom-token-mismatch': 'The custom token corresponds to a different audience.',
  'auth/requires-recent-login': 'This operation requires recent authentication. Log in again please',
  'auth/email-change-needs-verification': 'You have to verify your email.',
  'auth/email-already-in-use': 'The email address is already in use.',
  'auth/expired-action-code': 'The action code has expired.',
  'auth/internal-error': 'An internal error has occurred.',
  'auth/invalid-auth-event': 'An internal error has occurred.',
  'auth/invalid-verification-code': 'The SMS verification code is invalid. Please resend the verification code.',
  'auth/invalid-email': 'User not found',
  'auth/invalid-oauth-provider': 'Email provider is not supported for this operation.',
  'auth/invalid-action-code':
    'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
  'auth/wrong-password': 'Email or password is invalid.',
  'auth/invalid-phone-number': 'The format of the phone number provided is incorrect.',
  'auth/invalid-provider-id': 'The specified provider ID is invalid.',
  'auth/invalid-recipient-email': 'The email corresponding is failed. Email address is invalid.',
  'auth/invalid-sender': 'Invalid sender email or name.',
  'auth/invalid-verification-id': 'The verification ID is invalid.',
  'auth/multi-factor-auth-required': 'Proof of ownership of a second factor is required to complete sign-in.',
  'auth/missing-iframe-start': 'An internal error has occurred.',
  'auth/missing-multi-factor-info': 'No second factor identifier is provided.',
  'auth/network-request-failed': 'A network error has occurred.',
  'auth/no-auth-event': 'An internal error has occurred.',
  'auth/operation-not-allowed': 'The given sign-in provider is invalid.',
  'auth/operation-not-supported-in-this-environment':
    'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
  'auth/redirect-operation-pending': 'Sign-in operation is already pending.',
  'auth/second-factor-already-in-use': 'The second factor is already enrolled on this account.',
  'auth/maximum-second-factor-count-exceeded': 'The maximum allowed number of second factors has been exceeded.',
  'auth/timeout': 'The operation has timed out.',
  'auth/too-many-requests': 'We have blocked all requests from this device due to unusual activity. Try again later.',
  'auth/unauthorized-continue-uri': 'The domain of the continue URL is not whitelisted.',
  'auth/unsupported-first-factor': 'Unsupported-first-factor.',
  'auth/unsupported-persistence-type': 'The current environment does not support the specified persistence type.',
  'auth/unsupported-tenant-operation': 'This operation is not supported in a multi-tenant context.',
  'auth/unverified-email': 'The operation requires a verified email.',
  'auth/user-cancelled': 'You did not grant the permissions to the app for this operation.',
  'auth/user-not-found': 'There is no user on this identifier.',
  'auth/user-disabled': 'The user account has been disabled by an administrator.',
  'auth/user-mismatch': 'The supplied credentials do not correspond to the previously signed in user.',
  'auth/user-signed-out': 'User have been signed out',
  'auth/weak-password': 'The password must be 6 characters long or more.',
  'auth/web-storage-unsupported': 'This browser is not supported or 3rd party cookies and data may be disabled.'
};

const customErrors = {
  NO_SF_TOKEN: 'Log In to Salesforse, please',
  'entity is deleted': 'This file was deleted',
  NO_OBJECT_TYPE: 'Can`t find fields information',
  NO_USER_ID: 'User not found, try to Log In again'
};

const hiddenErrors = {
  'hidden/no_user_id': 'oops, something went wrong'
};

const allErrors = {
  ...authErrors,
  ...customErrors,
  ...hiddenErrors
};

export default function errorHandler(error, errorPlace, timeout = 3000) {
  const errorCode = error?.message || error;

  if (!errorCode) return null;

  if (errorCode.includes('hidden_')) {
    console.error(error);
    return false;
  }

  console.warn(`_ErrorHandler_: ${errorPlace} => `, error);

  let errorMessage = allErrors[errorCode];

  if (!errorMessage) errorMessage = errorCode;

  const notifyInstance = Toast.open({
    duration: timeout,
    message: errorMessage,
    position: 'is-bottom',
    type: 'is-danger'
  });
  return notifyInstance;
}

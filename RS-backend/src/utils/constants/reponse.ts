import { generateDisplayEmail } from '../utilFunctions'

const commonResponse = {
  error: {
    INTERNAL_SERVER: 'Internal server error.',
    INVALID_BODY: 'The data you have provided is incorrect or insufficient.',
    NO_DATA_TO_UPDATE: (name) => `No data was provided to update ${name}.`,
    UNAUTHORIZED_ACCESS: 'You are not authorize to access. Please consult your admin.'
  }
}

const userResponse = {
  error: {
    ACTIVATION: 'User activation process failed.',
    ALREADY_REGISTERED: 'The email has already registered in our system.',
    CHANGE_PASSWORD: 'Changing password failed.',
    COUNT: 'Error counting users data.',
    DEACTIVATION: 'User deactivation process failed.',
    FETCH_ALL: 'Users cannot be fetched at the moment.',
    INVALID_OPERATION: 'The operation you wish to perform is invalid.',
    INVALID_PASSWORD: 'Previous password is incorrect.',
    JWT_TOKEN: 'You are not authorized in the system.',
    LOGIN: 'Please use valid credential for login.',
    OTP_EXPIRED: 'The provided OTP code has been expired. Please try sending new OTP.',
    OTP_INVALID: 'Please enter valid OTP code.',
    OTP_SENT: (email) => `We were unable to send OTP code to ${generateDisplayEmail(email)}`,
    REGISTER: 'You have not been registered.',
    RESET_PASSWORD: 'Error occurred while setting new password',
    UNVERIFIED_LOGIN: 'User has not been verified yet, please complete the verification process.',
    USER_CREDENTIALS: 'Error fetching user credentials.',
    USER_INACTIVE: 'User cannot access the system (INACTIVE).',
    USER_NOT_FOUND: 'User was not found in the system.',
    USER_PROFILE: 'Error fetching user profile.',
    USER_UPDATE: 'We are unable to update the user at the time.'
  },
  success: {
    ACTIVATION: 'User has been activated successfully.',
    CHANGE_PASSWORD: 'Password has been changed successfully.',
    COUNT: 'User has been counted successfully',
    DEACTIVATION: 'User has been deactivated successfully.',
    FETCH_ALL: 'All users have been fetched successfully.',
    LOGIN: 'You have been successfully logged in to the system',
    OTP_SENT: (email) => `An OTP code has been sent to ${generateDisplayEmail(email)}`,
    OTP_VERIFIED: 'The OTP code has been verified successfully.',
    REGISTER: 'You have been registered successfully.',
    RESET_PASSWORD: 'You have successfully set new password',
    USER_CREDENTIALS: 'User credentials has been fetched successfully.',
    USER_PROFILE: 'User profile has been fetched successfully.',
    USER_UPDATED: 'User has been updated successfully.'
  }
}

const uploadResponse = {
  ERROR: (text: string) => `Error uploading ${text}.`,
  SUCCESS: (text: string) => `${text} has been uploaded successfully.`,
  UPDATE: 'Error on updating document after upload.'
}

const categoryResponse = {
  error: {
    DELETE: 'Error on deleting the category.',
    FETCH_ALL: 'Categories cannot be fetched at the moment.',
    INSERT: 'Error on inserting new category.',
    UPDATE: 'Error on updating the category.'
  },
  success: {
    DELETE: 'Category has been deleted successfully.',
    FETCH_ALL: 'All categories has been fetched successfully.',
    INSERT: 'New category has been inserted successfully.',
    UPDATE: 'Category has been updated successfully.'
  }
}

const houseResponse = {
  error: {
    DELETE: 'Error on deleting the house.',
    FETCH_ALL: 'Houses cannot be fetched at the moment.',
    FETCH_BY_ID: 'House cannot be fetched at the moment.',
    INSERT: 'Error on inserting new house.',
    UPDATE: 'Error on updating the house.'
  },
  success: {
    DELETE: 'House has been deleted successfully.',
    FETCH_ALL: 'All houses has been fetched successfully.',
    FETCH_BY_ID: 'The house has been fetched successfully.',
    INSERT: 'New house has been inserted successfully.',
    UPDATE: 'House has been updated successfully.'
  }
}

const bookingResponse = {
  error: {
    CANNOT_UPDATE: 'Booking cannot be updated at the moment.',
    DELETE: 'Error on deleting the booking.',
    FETCH_ALL: 'Bookings cannot be fetched at the moment.',
    FETCH_BY_ID: 'Booking cannot be fetched at the moment.',
    INSERT: 'Error on inserting new booking.',
    INVALID_STATUS: 'Booking status should be pending to update its status.',
    STATUS: 'Error on updating the status of booking.',
    UPDATE: 'Error on updating the booking.'
  },
  success: {
    DELETE: 'Booking has been deleted successfully.',
    FETCH_ALL: 'All bookings has been fetched successfully.',
    FETCH_BY_ID: 'The booking has been fetched successfully.',
    INSERT: 'New booking has been created successfully.',
    STATUS: 'Booking status has been updated successfully.',
    UPDATE: 'Booking has been updated successfully.'
  }
}

const responseCode = {
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  CREATED: 201,
  FORBIDDEN: 403,
  INTERNAL_SERVER: 500,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  OK: 200,
  PARTIAL_CONTENT: 206,
  UNAUTHORIZED: 401
}

export { commonResponse, categoryResponse, responseCode, userResponse, uploadResponse, houseResponse, bookingResponse }

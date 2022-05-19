const auth = {
    getUser: '/user/profile',
    register: '/user/register',
    login: '/user/login',
    profile:'/user/profile',
    update:'/user/update',
    forgotPassword: '/user/forgot-password',
    resetPassword: '/user/reset-password',
    changePassword: '/user/change-password',
    verifyUser: '/user/verify-otp',
    resendOtp: '/user/resendOtp',
    insertHouse:'/property/house',
    fetchAllHouse:'property/house',
    fetchHouse:(id)=>`/property/house/${id}`,
    updateHouse:(id)=>`/property/house/${id}`,
    deleteHouse:(id)=>`/property/house/${id}`,
    imageUpload:(id)=>`/user/upload/${id}`,
    createNewBooking:"/booking/new",
    FetchAllBooking:'/booking',
    UpdateBookingStatus:"/booking/status",
    FetchBookingById:(id)=>`/booking/${id}`,
    UpdateConversation:(id)=>`/booking/${id}`



    
  }
  export const apiEndPoints={auth}
//   /login
// /register
// /verify-otp
// /resend-otp
// /forgot-password
// /reset-password
// /profile
// /credentials
// /change-password
// /update
// /deactivate
// /upload
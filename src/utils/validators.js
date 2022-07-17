import i18n from '../i18n/i18n';

const mobileNumberRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const numberRegex = /^[0-9]*$/;

//Mobile Number validation
const validateMobile = mobile => {
  if (!mobile) {
    return {
      status: false,
      msg: i18n.plsEnterMobileNo,
    };
  } else {
    return mobileNumberRegex.test(mobile)
      ? {status: true, msg: ''}
      : {
          status: false,
          msg: i18n.validMobileNo,
        };
  }
};


export {validateMobile};

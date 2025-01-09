const Joi = require('joi');


// OTP verification schema
const verifyOtpSchema = Joi.object({
  otp: Joi.number().integer().min(100000).max(999999).required().messages({
    'number.base': 'OTP must be a number.',
    'number.min': 'OTP should be 6 digits.',
    'number.max': 'OTP should be 6 digits.',
    'any.required': 'OTP is required.'
  })
});

// Phone number schema
const sendOtpOnNumberSchema = Joi.object({
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      'string.base': 'Phone number must be a string of digits.',
      'string.length': 'Phone number must be exactly 10 digits.',
      'string.pattern.base': 'Phone number must contain only digits.',
      'any.required': 'Phone number is required.',
    })
});

// Email schema
const sendOtpOnEmailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address.',
    'any.required': 'Email is required.'
  })
});

// User DTO schema using Joi for multipart/form-data
const userSchema = Joi.object({
  firstName: Joi.string()
    .required().messages({
      'string.base': 'First name must be a string.',
      'any.required': 'First name is required.',
      'string.max': 'First name cannot exceed 50 characters.'
    })
    .max(50),
  lastName: Joi.string()
    .required().messages({
      'string.base': 'Last name must be a string.',
      'any.required': 'Last name is required.',
      'string.max': 'Last name cannot exceed 50 characters.'
    })
    .max(50),
  phone: Joi.string()
    .required().messages({
      'string.base': 'Phone number must be a string.',
      'any.required': 'Phone number is required.',
      'string.pattern.base': 'Phone number must be digits.',
      'string.length': 'Phone number must be exactly 10 digits.'
    })
    .pattern(/^[0-9]+$/)
    .length(10),
  gender: Joi.string()
    .valid('MALE', 'FEMALE', 'OTHER')
    .required().messages({
      'string.base': 'Gender must be a string.',
      'any.required': 'Gender is required.',
      'any.only': 'Gender must be either MALE, FEMALE, or OTHER.'
    }),
  dob: Joi.date()
    .required().messages({
      'date.base': 'Date of birth must be a valid date.',
      'any.required': 'Date of birth is required.'
    })
    .max('now'),
  city: Joi.string()
    .required().messages({
      'string.base': 'City must be a string.',
      'any.required': 'City is required.',
      'string.max': 'City cannot exceed 100 characters.'
    })
    .max(100),
  region: Joi.string()
    .required().messages({
      'string.base': 'State must be a string.',
      'any.required': 'State is required.',
      'string.max': 'State cannot exceed 100 characters.'
    })
    .max(100),
  email: Joi.string()
    .email().required().messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email is required.'
    }),
  role: Joi.string().default('USER'),
  // Add file validation if needed
  file: Joi.object().optional().messages({
    'object.base': 'File must be an object if provided.'
  }).custom((value, helpers) => {
    if (value) {
      if (value.size > 10 * 1024 * 1024) {
        return helpers.error('any.invalid', { message: 'File size is too large' });
      }
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(value.type)) {
        return helpers.error('any.invalid', { message: 'Unsupported File Format' });
      }
    }
    return value; // Return the value if no errors
  }),
});



// Export the schemas
module.exports = {
  verifyOtpSchema,
  sendOtpOnNumberSchema,
  sendOtpOnEmailSchema,
  userSchema,
};

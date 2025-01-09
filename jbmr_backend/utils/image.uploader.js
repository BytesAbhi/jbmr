const cloudinary = require('cloudinary').v2;
const { config } = require('dotenv');

// Load environment variables from .env file
config(); 

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Use the correct env variable
  api_key: process.env.CLOUDINARY_API_KEY,        // Use the correct env variable
  api_secret: process.env.CLOUDINARY_API_SECRET   // Use the correct env variable
});

// Function to upload an image to Cloudinary and return its public URL and public ID
const imageUploader = async (fileBuffer,folder) => {
  try {
    // Create a promise to handle the upload
    const uploadResponse = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: folder, // Specify the folder where the image will be stored
          transformation: [
            { width: 800, height: 800, crop: 'limit', quality: 'auto', fetch_format: 'auto' } // Resize and compress
          ]
        },
        (error, result) => {
          if (error) {
            console.error('Error uploading image to Cloudinary:', error);
            return reject(new Error('Image upload failed'));
          }
          resolve(result);
        }
      );

      // Pipe the file buffer to the Cloudinary upload stream
      stream.end(fileBuffer);
    });

    // Return the public URL and public ID of the uploaded image
    return {
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id
    };
  } catch (err) {
    // Log and rethrow the error
    console.error('Error in imageUploader:', err);
    throw new Error('Image upload failed');
  }
};

module.exports = imageUploader;

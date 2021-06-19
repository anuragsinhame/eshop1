import axios from "axios";

const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

export async function uploadUnsignedImage(image, upload_preset) {
  const imgData = new FormData();
  imgData.append("file", image);
  imgData.append("upload_preset", upload_preset);
  try {
    const uploadResponse = await axios.post(uploadUrl, imgData);
    console.log("resdara", uploadResponse.data);
    return { ...uploadResponse.data };
  } catch (error) {
    console.log("Error from cloudinary", error);
    throw new Error("Image Upload Error");
  }
}

export function uploadSignedImage(image) {
  // let unixTimestamp = Math.round(new Date().getTime() / 1000);
  // let eager = "w_400,h_300,c_pad|w_260,h_200,c_crop";
  // let publicId = "slider_images";
  // let signatureText = `eager=${eager}&public_id=${publicId}&timestamp=${unixTimestamp}${process.env.REACT_APP_CLOUDINARY_API_SECRET}`;
  // let signature = crypto
  //   .createHash("sha1")
  //   .update(signatureText)
  //   .digest("hex");
  // console.log("Uploading Image");
  // console.log("sign", signatureText);
  const imgData = new FormData();
  imgData.append("file", image);
  imgData.append("upload_preset", "e6zcsf21");
  // imgData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
  // imgData.append("eager", eager);
  // imgData.append("timestamp", unixTimestamp);
  // imgData.append("signature", signature);
  axios
    .post(uploadUrl, imgData)
    .then((res) => {
      let imgUrl = res.data.url;
      console.log("Res", res);
      console.log("Res from Cloudinary", imgUrl);
    })
    .catch((err) => {
      console.log("Error from cloudinary", err);
    });
}

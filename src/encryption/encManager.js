import sha256 from 'crypto-js/sha256';
import MD5 from "crypto-js/md5";

const encryptionList = {
  'md5': MD5,
  'sha256': sha256,
};

export default (userData, encType) => {
  if (encType in encryptionList){
    return encryptions[encType](userData);
  }
};
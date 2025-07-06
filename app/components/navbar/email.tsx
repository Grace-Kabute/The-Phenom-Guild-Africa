import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";


const RevealEmail = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = "thephenomguildafrica@gmail.com";

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="cursor-pointer" onClick={toggleEmail}>
      <FaEnvelope className=" transition" />
      {showEmail && (
        <span>
          {email}
        </span>
      )}
    </div>
  );
};

export default RevealEmail;

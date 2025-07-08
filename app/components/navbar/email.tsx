import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const RevealEmail = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = "thephenomguildafrica@gmail.com";

  const toggleEmail = () => setShowEmail(!showEmail);

  return (
    <a className="relative">
      <FaEnvelope
        className="cursor-pointer text-xl transition"
        onClick={toggleEmail}
      />

      {showEmail && (
        <div className="absolute right-0 top-full mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow z-50 whitespace-nowrap">
          {email}
        </div>
      )}
    </a>
  );
};

export default RevealEmail;
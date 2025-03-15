import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

interface CeoProps {
  name: string;
  companyName: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const Ceo: React.FC<CeoProps> = ({
  name,
  companyName,
  description,
  imageUrl,
  linkedinUrl,
  twitterUrl
}) => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* CEO Image */}
          <div className="md:w-1/3">
            <img
              src={imageUrl}
              alt={`${name} - CEO of ${companyName}`}
              className="w-full h-full object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* CEO Information */}
          <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {name}
            </h2>
            <p className="text-lg text-blue-600 mb-4">
              CEO of {companyName}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              )}
              {twitterUrl && (
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;

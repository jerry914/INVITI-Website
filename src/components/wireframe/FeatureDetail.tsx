import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FeatureDetailProps {
  title: string;
  description: string;
  capabilities: string[];
  screenshot?: string;
  onBack: () => void;
  isMobile?: boolean;
}

export const FeatureDetail: React.FC<FeatureDetailProps> = ({
  title,
  description,
  capabilities,
  screenshot,
  onBack,
  isMobile = false
}) => {
  return (
    <div className={`bg-white min-h-screen ${isMobile ? 'p-6' : 'py-16 px-20'}`}>
      <div className={isMobile ? 'max-w-[343px]' : 'max-w-[800px] mx-auto'}>
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-2 py-1 -ml-2"
        >
          <ArrowLeft size={isMobile ? 18 : 20} className="group-hover:-translate-x-1 transition-transform" />
          <span className={isMobile ? 'text-sm' : ''}>Back to Product Features</span>
        </button>

        {/* Screenshot */}
        {screenshot && (
          <div 
            className={`mb-8 bg-[#F7F7F7] border border-[#ECECEC] rounded-lg overflow-hidden ${
              isMobile ? 'max-w-[343px]' : ''
            }`}
            style={{
              aspectRatio: isMobile ? '4/3' : '16/9'
            }}
          >
            <ImageWithFallback 
              src={screenshot}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className={`mb-4 leading-[140%] ${isMobile ? '' : ''}`}>{title}</h1>
          <p className={`text-gray-600 leading-[160%] ${isMobile ? 'max-w-[343px]' : 'max-w-[700px]'}`}>
            {description}
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-8">
          <h3 className="mb-4">Key Capabilities</h3>
          <ul className="space-y-3">
            {capabilities.map((capability, index) => (
              <li 
                key={index} 
                className={`flex items-start gap-3 text-gray-700 leading-[160%] ${isMobile ? 'text-sm' : ''}`}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                <span className={isMobile ? 'max-w-[320px]' : ''}>{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration Placeholder */}
        <div className={`bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center ${
          isMobile ? 'h-64 max-w-[343px]' : 'h-96'
        }`}>
          <span className="text-gray-400 text-sm">Feature Illustration Placeholder</span>
        </div>
      </div>
    </div>
  );
};

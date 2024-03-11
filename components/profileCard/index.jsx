import Link from 'next/link'
import React from 'react'

const ProfileCard = () => {
  return (
    <div
        className={`my-6  pl-6 absolute pr-4 py-2 rounded-[10px] bottom-1 left-2 gap-4 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="relative  p-1.5 rounded flex items-center justify-center focus:outline-none right-0  focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame 48096672" clip-path="url(#clip0_1_1466)">
                <circle
                  id="Ellipse 539"
                  cx="9.5332"
                  cy="10.001"
                  r="8.28667"
                  stroke="#37414E"
                  strokeWidth="2.49306"
                />
                <path
                  id="Ellipse 540"
                  d="M9.5332 1.7143C10.9935 1.7143 12.4278 2.10017 13.6909 2.83283C14.9541 3.5655 16.0012 4.61893 16.7262 5.88647C17.4513 7.154 17.8285 8.59062 17.8197 10.0509C17.8109 11.5111 17.4164 12.9431 16.6762 14.2018"
                  stroke="#ECEEF1"
                  strokeWidth="2.49306"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1466">
                  <rect
                    width="19.0664"
                    height="19.0664"
                    fill="white"
                    transform="translate(0 0.466797)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className={`flex flex-col pl-3 `}>
            <div className="text-sm text-gray-50">Getting Started</div>
          </div>
        </div>
        <button
          className={`text-gray-400   rounded focus:outline-none  focus:ring-gray-500 focus:text-white`}
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow-narrow-right">
              <path
                id="Icon"
                d="M3.23975 8.00049H12.6479M12.6479 8.00049L9.11987 4.47241M12.6479 8.00049L9.11987 11.5286"
                stroke="#ECEEF1"
                strokeWidth="1.17603"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
  )
}

export default ProfileCard
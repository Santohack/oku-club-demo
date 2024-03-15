import ProfleCollection from "@/components/Profile";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen py-6 mx-10">
      <div className="flex gap-2 justify-end ">
        <span className="border-2 border-gray-500 hover:-translate-y-0.5 duration-75 rounded-full hover:border-gray-400  hover:bg-[#1C1C1D] cursor-pointer px-1 py-1">
          <svg
            height="28"
            viewBox="0 0 28 28"
            width="28"
            class="css-1s6s5w3"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5 6C12.9477 6 12.5 6.44772 12.5 7L12.3799 7.84034C12.2724 8.59275 11.398 8.95494 10.79 8.49892L10.1109 7.98959C9.72039 7.59907 9.08723 7.59907 8.6967 7.98959L7.98959 8.6967C7.59907 9.08723 7.59907 9.72039 7.98959 10.1109L8.49891 10.79C8.95494 11.398 8.59275 12.2724 7.84033 12.3799L7 12.5C6.44772 12.5 6 12.9477 6 13.5V14.5C6 15.0523 6.44772 15.5 7 15.5L7.84034 15.6201C8.59276 15.7276 8.95495 16.602 8.49892 17.21L7.98959 17.8891C7.59907 18.2796 7.59907 18.9128 7.98959 19.3033L8.6967 20.0104C9.08723 20.401 9.72039 20.401 10.1109 20.0104L10.79 19.5011C11.398 19.0451 12.2724 19.4073 12.3799 20.1596L12.5 21C12.5 21.5523 12.9477 22 13.5 22H14.5C15.0523 22 15.5 21.5523 15.5 21L15.6201 20.1596C15.7276 19.4073 16.602 19.0451 17.21 19.5011L17.8891 20.0104C18.2796 20.401 18.9128 20.401 19.3033 20.0104L20.0104 19.3033C20.4009 18.9128 20.4009 18.2796 20.0104 17.8891L19.5011 17.21C19.0451 16.602 19.4073 15.7276 20.1596 15.6201L21 15.5C21.5523 15.5 22 15.0523 22 14.5V13.5C22 12.9477 21.5523 12.5 21 12.5L20.1596 12.3799C19.4073 12.2724 19.0451 11.398 19.5011 10.79L20.0104 10.1109C20.4009 9.72039 20.4009 9.08723 20.0104 8.6967L19.3033 7.98959C18.9128 7.59907 18.2796 7.59907 17.8891 7.98959L17.21 8.49892C16.602 8.95494 15.7276 8.59275 15.6201 7.84034L15.5 7C15.5 6.44772 15.0523 6 14.5 6H13.5ZM14 16C15.1045 16 16 15.1045 16 14C16 12.8955 15.1045 12 14 12C12.8955 12 12 12.8955 12 14C12 15.1045 12.8955 16 14 16Z"
              stroke-width="1.5"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="border-2 border-gray-500 hover:-translate-y-0.5 duration-75 rounded-full cursor-pointer hover:border-gray-400 hover:bg-[#1C1C1D]  px-1 py-1 ">
          <svg
            height="28"
            viewBox="0 0 28 28"
            width="28"
            className="css-y7zllx"
            fill="currentColor"
          >
            <path
              clip-rule="evenodd"
              d="m16.625 8.375c0-.9665.7835-1.75 1.75-1.75s1.75.7835 1.75 1.75-.7835 1.75-1.75 1.75c-.6118 0-1.1502-.3139-1.463-.78942l-.009-.01422-.0098-.01489c-.1699-.26974-.2682-.58913-.2682-.93147zm1.75 3.25c-.8754 0-1.67-.3461-2.2544-.909l-3.4292 2.2044c.1189.3378.1836.7012.1836 1.0796 0 .3786-.0647.742-.1837 1.0799l3.429 2.2044c.5844-.5631 1.3791-.9093 2.2547-.9093 1.7949 0 3.25 1.4551 3.25 3.25s-1.4551 3.25-3.25 3.25-3.25-1.4551-3.25-3.25c0-.3784.0647-.7417.1835-1.0794l-3.4292-2.2045c-.5844.5628-1.3789.9089-2.2543.9089-1.79493 0-3.25-1.4551-3.25-3.25s1.45507-3.25 3.25-3.25c.8755 0 1.6702.3462 2.2545.9091l3.4292-2.20438c-.119-.33782-.1837-.70122-.1837-1.07972 0-1.79493 1.4551-3.25 3.25-3.25s3.25 1.45507 3.25 3.25c0 1.7949-1.4551 3.25-3.25 3.25zm-7.2648 3.301c-.0046.0067-.0091.0135-.0135.0204-.0043.0065-.0084.0131-.0124.0198-.3133.4724-.8499.7838-1.4593.7838-.9665 0-1.75-.7835-1.75-1.75s.7835-1.75 1.75-1.75c.6079 0 1.1433.3099 1.457.7804.0047.0079.0096.0158.0147.0236.0052.0081.0105.0161.016.0239.1663.2678.2623.5837.2623.9221 0 .34-.097.6574-.2648.926zm5.7799 3.7725c-.168.2687-.2651.5862-.2651.9265 0 .9665.7835 1.75 1.75 1.75s1.75-.7835 1.75-1.75-.7835-1.75-1.75-1.75c-.6098 0-1.1468.3119-1.4601.785-.0038.0064-.0078.0127-.0119.019-.0042.0066-.0085.0131-.0129.0195z"
              fill-rule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex items-center cursor-pointer justify-between py-4 mx-40">
        <div>
          <div className="text-2xl mb-1">Profile</div>
          <div className="flex gap-2 underline underline-offset-8">
            <span className="block text-gray-300">Santos </span>
            <div className="w-1 h-1 bg-gray-300 mt-3 rounded-full flex items-center justify-center" />
            <span className="block text-gray-300">Following 0</span>
            <div className="w-1 h-1 bg-gray-300 mt-3 rounded-full flex items-center justify-center" />
            <span className="block text-gray-300">0 Follow you</span>
          </div>
        </div>
        <div className="flex ">
          <img
            alt="Santo_maurya"
            className="rounded-full"
            height="80"
            src="https://readng.ams3.digitaloceanspaces.com/avatars/dogAvatar.png"
            width="80"
          />
        </div>
      </div>
      <div className="">
      <ProfleCollection />
      </div>
    </div>
  );
};

export default page;

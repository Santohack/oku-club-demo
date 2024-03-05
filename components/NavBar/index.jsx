import Image from "next/image";
import Link from "next/link";
import React from "react";
export const navigation = [
  { name: "Explore", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Twitter", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center my-1 p-4">
      <div className=" flex items-center">
        <Link href="/">
          <span>
            <svg height="24" viewBox="0 0 60 24" width="60">
              <path
                clip-rule="evenodd"
                stroke="white"
                d="m37.6385 18.0685.5198-.1135c.4649-.0915.7699-.2653.7699-.8519v-9.75513l-1.2897-.72013v-.5298l3.3874-1.09804h.2501v12.1031c0 .6058.3469.7952.8081.8895l.4426.0759v.7393h-4.8882zm3.8495-4.1854 2.2707-2.196c.7699-.7577.6741-1.2875-.1534-1.4394l-.6165-.1135v-.73838h4.7542v.73838l-.4965.097c-.5514.0937-1.0574.3597-1.4431.7586l-2.16 2.078 4.2921 5.1151-.173.6817h-2.3478zm-11.7214-8.48588c-3.5993 0-6.7756 2.72771-6.7756 6.98898 0 3.9402 2.849 6.6111 6.5255 6.6111 3.7918 0 6.8129-2.595 6.8129-6.8188 0-4.05357-2.8286-6.78128-6.5628-6.78128zm-.212 1.21242c2.4055 0 3.9648 2.08353 3.9648 5.77656 0 3.5989-1.5221 5.3987-3.7342 5.3987-2.3283 0-3.9843-2.1027-3.9843-5.7583 0-3.69396 1.6365-5.41696 3.7537-5.41696zm-15.6072 3.34701v1.79895c-1.6023.0019-3.1384.6292-4.27147 1.7442-.91442.8999-1.50601 2.0581-1.70129 3.3005h5.97276v1.7989h-13.9474v-1.7989h6.00478c-.19553-1.2507-.79056-2.4168-1.71092-3.3225-1.13896-1.1208-2.68314-1.7514-4.29386-1.7533v-1.80262c1.43891.00099 2.85029.38812 4.08222 1.11982s2.23774 1.7802 2.90916 3.0326c.67047-1.2431 1.67214-2.283 2.89758-3.0084s2.62844-1.10889 4.05844-1.10925zm36.0281 1.42585v4.5275c0 2.1211 1.4441 3.0874 2.85 3.0874 1.4579 0 2.7281-.8721 3.4403-1.8942v1.8969h.4426l3.2916-.625v-.7036l-.6509-.0568c-.5969-.0759-.847-.3037-.847-.7768v-7.7046h-.4808l-3.3306.60392v.68258l.6351.0915c.5774.0568.808.3029.808.8712v5.2898c-.612.3769-1.3181.5799-2.0401.5865-.8814 0-1.7666-.3404-1.7666-1.9316v-6.1939h-.4649l-3.2721.60392v.68258l.5969.0915c.5579.076.7885.3029.7885.8712z"
                fill-rule="white"
              ></path>
              <path
                stroke="currentColor"
                d="m6.97375 9.42609c1.23145 0 2.22973-.98239 2.22973-2.19424s-.99828-2.19425-2.22973-2.19425-2.22973.9824-2.22973 2.19425.99828 2.19424 2.22973 2.19424z"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
      <div className="flex gap-6">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <span className="text-[17px] text-gray-200">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-6 items-center">
        <Link
          href="/login"
          className="border rounded px-8 border-gray-300 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
        >
          <span className="text-[17px] text-gray-200">Sign In</span>
        </Link>
        <Link
          href="/login"
          className="border rounded bg-slate-100 text-gray-700 border-gray-300 py-2 px-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
        >
          <span className="text-[17px]">Join</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

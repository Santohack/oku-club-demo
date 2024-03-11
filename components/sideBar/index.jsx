"use client";
import Link from "next/link";
import React, { useState } from "react";
import ItemCard from "../itemCard";
import ProfileCard from "../profileCard";

const Sidebar = () => {
  return (
    <div
      className={` w-[270px]
       h-[100vh] top-0 bottom-0 z-[1000] sticky  bg-[#131314] duration-300 border-r-[1px] border-gray-600`}
    >
      <div className="px-6 pt-4 ">
        <div className="flex items-center">
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
      </div>

      {/* items */}
      <div className="px-6 pt-4 ">
        <ul className="flex flex-col space-y-2">
          <li className={`relative`}>
            <ItemCard
              href="/home"
              label={"Home"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m13.1087 7.33564c.2438-.21596.5614-.33563.8909-.33564.3294-.00001.6471.11964.8909.33558l5.676 5.02782c.1366.121.2456.2684.3203.4328.0746.1644.1132.3422.1132.522v6.9445c0 .4072-.3388.7373-.7568.7373-.0541 0-.1069-.0055-.1578-.0161-.0508.0105-.1035.016-.1575.016h-11.85584c-.054 0-.10669-.0055-.15749-.016-.0509.0106-.1037.0161-.15781.0161-.41795 0-.75676-.3301-.75676-.7373v-6.9445c0-.1798.03855-.3576.11319-.522.07463-.1644.1837-.3118.32021-.4327zm6.3778 6.06416v6.1255h-3.0275v-3.6873c0-.4072-.3388-.7373-.7567-.7373h-3.4054c-.418 0-.7568.3301-.7568.7373v3.6873h-3.02659v-6.1256l5.48609-4.86022zm-6.4329 6.1255h1.8919v-2.9499h-1.8919z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>
          <li className={`relative `}>
            <ItemCard
              href="/feed"
              label={"Feed"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m17.2305 5.85714c0-.47338-.3701-.85714-.8267-.85714-.4565 0-.8266.38376-.8266.85714v.47238h-.4554c-.4565 0-.8266.38375-.8266.85714 0 .47338.3701.85714.8266.85714h.4554v.47209c0 .47339.3701.85714.8266.85714.4566 0 .8267-.38375.8267-.85714v-.47209h.4555c.4565 0 .8267-.38376.8267-.85714 0-.47339-.3702-.85714-.8267-.85714h-.4555zm3.0199 2.46614c.4565 0 .8266.38376.8266.85714v1.13608h1.0963c.4565 0 .8266.3838.8266.8572s-.3701.8571-.8266.8571h-1.0963v1.1377c0 .4734-.3701.8572-.8266.8572-.4566 0-.8267-.3838-.8267-.8572v-1.1377h-1.0967c-.4565 0-.8266-.3837-.8266-.8571s.3701-.8572.8266-.8572h1.0967v-1.13608c0-.47338.3701-.85714.8267-.85714zm-8.7861-2.01077c-.1565-.0494-.3222-.04918-.4766-.00157-1.37463.39932-2.62501 1.16388-3.62734 2.21814-1.00583 1.05795-1.72677 2.37072-2.09099 3.80752-.36422 1.4367-.359 2.9474.01512 4.3814.37412 1.4341 1.10409 2.7414 2.1172 3.7919 1.0131 1.0504 2.27397 1.8073 3.65701 2.1952 1.383.3879 2.84.3933 4.2256.0157 1.3857-.3777 2.6517-1.1252 3.6721-2.1682 1.0163-1.0389 1.7535-2.3349 2.1387-3.7596.0446-.1543.0467-.3198.0041-.4773l-.0001-.0003c-.1001-.3703-.4259-.6261-.7968-.6257-.0837 0-.165.0132-.242.0377-1.1109.3158-2.2827.3223-3.3969.0184-1.1216-.3058-2.1446-.915-2.9646-1.7653-.82-.8502-1.4076-1.911-1.7025-3.0739-.2933-1.15606-.2869-2.37179.0182-3.52429.0224-.07626.0348-.15667.0358-.23938.0044-.38103-.2343-.71936-.5858-.83035zm-2.92655 3.42006c.47588-.50054 1.0218-.91928 1.61695-1.24355-.075.95477.0058 1.91978.2427 2.85368.3694 1.4565 1.1053 2.7851 2.1323 3.85 1.0271 1.0649 2.3084 1.8279 3.7131 2.211.9007.2456 1.8313.3294 2.7521.2516-.3127.6171-.7165 1.1831-1.1992 1.6765-.8146.8327-1.8254 1.4295-2.9317 1.731s-2.2694.2972-3.3736-.0125-2.11082-.9139-2.91965-1.7526c-.80884-.8387-1.39163-1.8824-1.69032-3.0273-.29868-1.1449-.30284-2.351-.01206-3.4981.29078-1.147.86635-2.1951 1.66938-3.03973z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>
          <li className={`relative`}>
            <ItemCard
              href="/explore"
              label={"Explore"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m8.5 13.2194c0-2.6065 2.1129-4.7194 4.7194-4.7194s4.7194 2.1129 4.7194 4.7194c0 1.2918-.519 2.4625-1.36 3.3147-.0078.0072-.0155.0145-.023.0221-.0076.0075-.0149.0152-.0221.023-.8522.8407-2.0226 1.3596-3.3143 1.3596-2.6065 0-4.7194-2.1129-4.7194-4.7194zm8.5547 4.8964c-1.0566.8288-2.3882 1.323-3.8353 1.323-3.43488 0-6.2194-2.7845-6.2194-6.2194 0-3.43488 2.78452-6.2194 6.2194-6.2194 3.4349 0 6.2194 2.78452 6.2194 6.2194 0 1.4473-.4943 2.7791-1.3234 3.8358l2.6655 2.6655c.2929.2929.2929.7677 0 1.0606s-.7678.2929-1.0607 0z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>
          <li className={`relative`}>
            <ItemCard
              href="/highlights"
              label={"Highlights"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m14 8c-3.3137 0-6 2.6863-6 6 0 1.9798.95886 3.7356 2.4375 4.8284v-3.1409c0-.3481.1383-.6819.3844-.9281.2015-.2015.4618-.3307.7406-.3709v-2.6385c0-.2841.1605-.5438.4146-.6708l3.375-1.68752c.2325-.11625.5086-.10382.7297.03283.2211.13666.3557.37806.3557.63799v4.326c.2788.0402.5391.1694.7406.3709.2461.2462.3844.58.3844.9281v3.1409c1.4786-1.0928 2.4375-2.8486 2.4375-4.8284 0-3.3137-2.6863-6-6-6zm3.1399 12.8131c2.5739-1.1882 4.3601-3.7921 4.3601-6.8131 0-4.14214-3.3579-7.5-7.5-7.5-4.14214 0-7.5 3.35786-7.5 7.5 0 3.021 1.78617 5.6249 4.3601 6.8131.0099.0048.0199.0094.03.0138.9474.4322 2.0005.6731 3.1099.6731s2.1625-.2409 3.1099-.6731c.0101-.0044.0201-.009.03-.0138zm-1.0774-1.177v-3.7611h-.3738c-.0004 0-.0008 0-.0012 0s-.0008 0-.0012 0h-3.3726c-.0004 0-.0008 0-.0012 0s-.0008 0-.0012 0h-.3738v3.7611c.6431.2354 1.3378.3639 2.0625.3639s1.4194-.1285 2.0625-.3639zm-3-5.2611h1.875v-3.099l-1.875.9375z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>
          <div
            style={{ m: "15px 0 5px 20px" }}
            className="pre-text-color text-[#47515F]"
          >
            Library
          </div>

          <li className={`relative`}>
            <ItemCard
              href="/read"
              label={"To Read"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m9.54839 7.6v12.2403l4.07511-2.3396c.2338-.1343.5181-.1343.7519 0l4.0762 2.3398v-12.2405zm-1.15157-1.18995c.25408-.26255.59869-.41005.95802-.41005h9.29036c.3593 0 .7039.1475.958.41005s.3968.61865.3968.98995v13.8c0 .2835-.1452.5457-.3816.6895-.2364.1437-.5288.1475-.7685.0098l-4.8504-2.7841-4.8493 2.7841c-.23979.1377-.53218.134-.76861-.0098-.23643-.1437-.38159-.406-.38159-.6895v-13.8c0-.3713.14274-.7274.39682-.98995z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>
          <li className={`relative`}>
            <ItemCard
              href="/reading"
              label={"Reading"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m14 8c-3.1951 0-5.43782 1.42977-6.8632 2.84-.71043.7028-1.22246 1.4044-1.55792 1.9315-.16811.2641-.293.4863-.3772.6453-.04213.0796-.07417.1435-.09642.1892-.01113.0229-.01981.0412-.0261.0547l-.00765.0165-.00248.0054-.0009.002-.00038.0009c-.00016.0003-.00031.0007.71486.3151l-.71517-.3144c-.08993.2001-.08992.4286.00002.6288l.71515-.3144c-.71515.3144-.71499.3148-.71483.3151l.00037.0008.00091.0021.00248.0054.00764.0165c.00629.0135.01498.0318.02611.0546.02225.0457.05429.1097.09642.1893.08421.159.20909.381.37721.6451.33546.5271.8475 1.2284 1.55794 1.9312 1.42539 1.4099 3.66814 2.8393 6.86314 2.8393s5.4377-1.4294 6.8631-2.8393c.7105-.7028 1.2225-1.4041 1.558-1.9312.1681-.2641.293-.4861.3772-.6451.0421-.0796.0742-.1436.0964-.1893.0111-.0228.0198-.0411.0261-.0546l.0077-.0165.0024-.0054.0009-.0021.0004-.0008c.0002-.0003.0003-.0007-.7148-.3151l.7151.3144c.09-.2002.09-.4287.0001-.6288l-.7152.3144c.7152-.3144.715-.3148.7148-.3151l-.0003-.0009-.0009-.002-.0025-.0054-.0077-.0165c-.0062-.0135-.0149-.0318-.0261-.0547-.0222-.0457-.0542-.1096-.0964-.1892-.0842-.159-.2091-.3812-.3772-.6453-.3354-.5271-.8475-1.2287-1.5579-1.9315-1.4254-1.41023-3.6681-2.84-6.8632-2.84zm-7.09658 6.4045c-.09907-.1557-.17946-.2925-.24183-.404.06238-.1115.14278-.2484.24187-.4041.28818-.4528.72995-1.0579 1.34018-1.6616 1.21592-1.203 3.08186-2.38641 5.75636-2.38641s4.5404 1.18341 5.7564 2.38641c.6102.6037 1.052 1.2088 1.3401 1.6616.0991.1557.1795.2926.2419.4041-.0624.1115-.1427.2483-.2418.404-.2882.4527-.73 1.0576-1.3402 1.6612-1.2159 1.2027-3.0819 2.3859-5.7564 2.3859s-4.54051-1.1832-5.75642-2.3859c-.61022-.6036-1.05198-1.2085-1.34016-1.6612zm4.94438-.4039c0-1.1759.9636-2.1291 2.1522-2.1291s2.1522.9532 2.1522 2.1291c0 1.1758-.9636 2.129-2.1522 2.129s-2.1522-.9532-2.1522-2.129zm2.1522-3.6775c-2.0531 0-3.7174 1.6465-3.7174 3.6775 0 2.0309 1.6643 3.6774 3.7174 3.6774 2.053 0 3.7174-1.6465 3.7174-3.6774 0-2.031-1.6644-3.6775-3.7174-3.6775z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>
          <li className={`relative `}>
            <ItemCard
              href="/read"
              label={"Read"}
              svg={
                <svg
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  class="css-y7zllx"
                  fill="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m20.769 9.23434c.308.31243.308.81896 0 1.13136l-8.2817 8.4c-.308.3124-.8074.3124-1.1154 0l-4.14086-4.1998c-.30803-.3124-.30806-.8189-.00005-1.1314.308-.3124.8074-.3125 1.11544 0l3.58317 3.6341 7.724-7.83429c.308-.31242.8074-.31241 1.1154.00003z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
          </li>

          <div
            style={{ m: "15px 0 5px 20px", fontFamily: "Poppins" }}
            className="pre-text-color text-[#47515F]"
          >
            Collections
          </div>

          <li className={`relative`}>
            <ItemCard
              href="/create-new"
              label={"Create New"}
              svg={
                <svg
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  class="css-y7zllx"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path
                    clip-rule="evenodd"
                    d="m10.6349 5.63492c0-.35066-.2842-.63492-.6349-.63492-.35066 0-.63492.28426-.63492.63492v3.73016h-3.73016c-.35066 0-.63492.28426-.63492.63492 0 .3507.28426.6349.63492.6349h3.73016v3.7302c0 .3506.28426.6349.63492.6349.3507 0 .6349-.2843.6349-.6349v-3.7302h3.7302c.3506 0 .6349-.2842.6349-.6349 0-.35066-.2843-.63492-.6349-.63492h-3.7302z"
                    fill-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
              }
            />
           
          </li>
          <li className={`relative `}>
              <ItemCard
                href="/read"
                label={"Read"}
                svg={
                  <svg
                    height="18"
                    viewBox="0 0 18 18"
                    width="18"
                    class="css-j2l39w"
                  >
                    <g
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      fill="currentColor"
                    >
                      <path d="m12.375 13v-1.125c0-.8951-.3556-1.7536-.9885-2.38649-.6329-.63293-1.49139-.98851-2.3865-.98851s-1.75355.35558-2.38649.98851c-.63293.63289-.98851 1.49139-.98851 2.38649v1.125"></path>
                      <path d="m14.625 13v-1.125c0-1.4918-.5926-2.92258-1.6475-3.97748-1.0549-1.05489-2.4857-1.64752-3.9775-1.64752-1.49184 0-2.92258.59263-3.97748 1.64752-1.05489 1.0549-1.64752 2.48568-1.64752 3.97748v1.125"></path>
                      <path d="m16.875 13v-1.125c0-2.08858-.8297-4.09162-2.3065-5.56847-1.4769-1.47684-3.4799-2.30653-5.5685-2.30653-2.08858 0-4.09162.82969-5.56847 2.30653-1.47684 1.47685-2.30653 3.47989-2.30653 5.56847v1.125"></path>
                    </g>
                  </svg>
                }
              />
            </li>
        </ul>
      </div>
      <br />
      <ProfileCard />
    </div>
  );
};

export default Sidebar;

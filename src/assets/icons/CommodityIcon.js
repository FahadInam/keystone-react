import * as React from "react"
const CommodityIcon = ({ height, width, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ height: height ? `${height}rem` : undefined, width: width ? `${width}rem` : undefined }} {...props}>
    <g fill="#4B5563" clipPath="url(#a)">
      <path d="M23.625 8.625c0-.667-.26-1.294-.731-1.765a.374.374 0 0 0-.402-.083c.005-.46-.12-.92-.367-1.324V.375a.375.375 0 0 0-.231-.346.366.366 0 0 0-.144-.026V0H4.875c-.1 0-.195.04-.265.11l-4.5 4.5a.374.374 0 0 0-.11.265v15.75c0 .207.168.375.375.375H17.25a.378.378 0 0 0 .265-.11l4.5-4.5c.07-.07.11-.165.11-.265v-2.203c.424-.27.81-.573 1.144-.907A2.479 2.479 0 0 0 24 11.25c0-.596-.208-1.161-.589-1.61.14-.316.214-.66.214-1.015Zm-5.762 2.36-.375.375-.75.75.53.53.75-.75.376-.375.832-.832c.178.279.274.603.274.942 0 .466-.181.905-.512 1.235l-.375.375-1.125 1.125.53.53 1.126-1.125.375-.375.082-.082c.178.279.274.603.274.942 0 .466-.181.905-.512 1.235a5.988 5.988 0 0 1-4.261 1.765H13.5c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25h.44a.375.375 0 0 0 .262-.108L18.1 8.806c.18.28.276.604.276.944 0 .466-.181.905-.512 1.235ZM17.095 4.5h-5.69l3.75-3.75h5.69l-3.75 3.75Zm-3-3.75-3.86 3.86a.373.373 0 0 0-.11.265v5.3l-.542-.362a.373.373 0 0 0-.416 0l-.917.611-.917-.611a.375.375 0 0 0-.416 0l-.542.361V5.03l4.28-4.28h3.44ZM5.03.75h4.565L5.845 4.5H1.28L5.03.75ZM.75 5.25h4.875v5.625a.375.375 0 0 0 .583.312l.917-.611.917.611c.126.084.29.084.416 0l.917-.611.917.611a.376.376 0 0 0 .583-.312V5.25h6v3.708L13.785 12H13.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h1.602c.608 0 1.201-.086 1.773-.24v2.49H.75v-15Zm20.625 10.72-3.75 3.75v-2.207a6.76 6.76 0 0 0 2.269-1.498 2.479 2.479 0 0 0 .731-1.765c0-.597-.21-1.161-.591-1.611.14-.315.216-.659.216-1.014 0-.667-.26-1.294-.731-1.765a.373.373 0 0 0-.395-.085l.001-.025c0-.667-.26-1.294-.731-1.765a.375.375 0 0 0-.528-.002l-.241.237V5.03l3.75-3.75v14.69Zm1.363-3.485a5.656 5.656 0 0 1-.613.53V8.159l.476-.476c.178.279.274.603.274.942 0 .466-.181.905-.512 1.235a.375.375 0 1 0 .53.53l.004-.003.079-.079c.178.279.274.603.274.942 0 .466-.181.905-.512 1.235Z" />
      <path d="M13.5 13.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S15 15.827 15 15s-.673-1.5-1.5-1.5Zm0 2.25a.75.75 0 1 1 .002-1.502.75.75 0 0 1-.002 1.502ZM8.25 21.75H2.625v.75H8.25v-.75ZM9.75 21.75H9v.75h.75v-.75ZM11.25 21.75h-.75v.75h.75v-.75ZM12.75 21.75H12v.75h.75v-.75ZM16.125 23.25H10.5V24h5.625v-.75ZM17.625 23.25h-.75V24h.75v-.75ZM19.125 23.25h-.75V24h.75v-.75ZM20.625 23.25h-.75V24h.75v-.75ZM19.875 21.375h-.75v.75h.75v-.75ZM21.375 21.375h-.75v.75h.75v-.75ZM22.875 21.375h-.75v.75h.75v-.75Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default CommodityIcon

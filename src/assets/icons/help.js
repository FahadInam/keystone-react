import * as React from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#9CA3AF"
        d="M15.999 2.666c-7.367 0-13.333 5.967-13.333 13.333 0 7.367 5.966 13.334 13.333 13.334s13.333-5.967 13.333-13.334c0-7.366-5.966-13.333-13.333-13.333Zm1.333 22.667h-2.667v-2.667h2.667v2.667Zm2.753-10.327-1.193 1.227c-.96.96-1.56 1.766-1.56 3.766h-2.667v-.666c0-1.474.6-2.807 1.56-3.774l1.66-1.68A2.666 2.666 0 1 0 13.332 12h-2.666a5.332 5.332 0 0 1 5.333-5.333 5.332 5.332 0 0 1 5.333 5.333 4.232 4.232 0 0 1-1.247 3.007Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent

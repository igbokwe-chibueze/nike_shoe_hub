/* eslint-disable react/prop-types */

export const ArrowRightIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path 
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" 
      clipRule="evenodd" 
    />
  </svg>
);

export const ChevronLeftIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
);

export const HamburgerIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
  
);

export const CloseIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>


);

export const TruckIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
  </svg>
);

export const ShieldIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path 
      fillRule="evenodd" 
      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" 
      clipRule="evenodd" 
    />
  </svg>
);

export const LoveIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.23576 0.0195141C8.27717 0.167622 7.66306 0.45699 7.06498 1.04233C5.56279 2.51266 5.47498 4.91504 6.85519 6.78199C6.9655 6.93126 7.31946 7.32504 7.64177 7.65709C8.66521 8.71149 10.0762 9.8829 12.1334 11.3862L12.7104 11.8078L13.3758 11.3146C15.4311 9.79122 16.7986 8.65449 17.7468 7.6812C18.4867 6.92175 18.779 6.53034 19.0798 5.89619C19.4122 5.19519 19.5241 4.69502 19.522 3.91884C19.52 3.15071 19.443 2.80603 19.1195 2.11478C18.9137 1.67508 18.8313 1.55779 18.4554 1.16941C17.9748 0.672955 17.5594 0.396078 17.0182 0.21151C16.1133 -0.0971494 15.2038 -0.0512363 14.3696 0.345246C13.8865 0.574859 13.6371 0.760103 13.1394 1.25878L12.7064 1.69259L12.2252 1.21113C11.6926 0.678356 11.2714 0.396319 10.7313 0.210931C10.2294 0.0387088 9.61809 -0.0395652 9.23576 0.0195141ZM7.7121 13.547C7.11299 13.6002 6.25303 13.7491 5.65154 13.904C4.95984 14.082 4.03186 14.4079 4.03186 14.4727C4.03186 14.5536 6.38084 21.8036 6.42228 21.8506C6.44131 21.8722 6.676 21.8521 6.94384 21.8059C7.37516 21.7316 7.97468 21.7186 12.1893 21.6921L16.9479 21.6622L17.3988 21.5362C17.946 21.3833 18.4694 21.1403 18.8666 20.8547C19.0297 20.7374 20.1602 19.7775 21.379 18.7216C22.9433 17.3663 23.6347 16.7371 23.7306 16.5817C24.1026 15.9784 24.0886 15.3468 23.6933 14.8945C23.5794 14.7642 23.4001 14.623 23.289 14.5763C23.0429 14.4726 22.6293 14.4667 22.4075 14.5637C22.316 14.6037 21.5671 15.0658 20.7432 15.5905C19.0719 16.6548 18.5405 16.9463 17.8454 17.1799C16.7076 17.5624 16.3503 17.5896 12.4589 17.5906L9.18888 17.5915V16.8701V16.1487L11.5916 16.1346C13.9158 16.121 14.0012 16.1172 14.2053 16.0196C14.5171 15.8705 14.701 15.6897 14.8416 15.3941C15.0971 14.8568 14.9636 14.1955 14.5209 13.8057C14.1624 13.4901 14.1773 13.4914 11.0205 13.4987C9.45873 13.5024 7.96995 13.5241 7.7121 13.547ZM1.32545 15.6528L0.00210969 16.2652L0.00103141 20.1326L0 24L0.503982 23.8168C0.781196 23.7161 1.89403 23.3232 2.97701 22.9438C4.05999 22.5643 4.96425 22.2376 4.98647 22.2177C5.02923 22.1795 2.73369 15.0336 2.68011 15.0379C2.6629 15.0393 2.05334 15.316 1.32545 15.6528Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path
      d="M22.5 5.776a8.902 8.902 0 0 1-2.474.65 4.18 4.18 0 0 0 1.894-2.28 8.922 8.922 0 0 1-2.737 1 4.387 4.387 0 0 0-3.145-1.302c-2.379 0-4.308 1.847-4.308 4.124 0 .323.038.638.112.94-3.58-.173-6.754-1.815-8.879-4.31A3.961 3.961 0 0 0 2.38 6.67c0 1.431.762 2.694 1.916 3.433a4.455 4.455 0 0 1-1.95-.518v.051c0 1.998 1.485 3.666 3.454 4.045-.36.093-.741.145-1.135.145a4.31 4.31 0 0 1-.81-.077c.548 1.64 2.138 2.832 4.023 2.865a8.89 8.89 0 0 1-5.35 1.763c-.348 0-.69-.02-1.028-.057a12.572 12.572 0 0 0 6.603 1.856c7.925 0 12.257-6.285 12.257-11.736l-.015-.534a8.412 8.412 0 0 0 2.155-2.13Z"
    />
  </svg>
);

export const FacebookIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path
      d="M17.565 1.005 14.787 1c-3.12 0-5.136 2.125-5.136 5.414v2.497H6.859c-.242 0-.437.2-.437.448v3.617c0 .248.196.449.437.449H9.65v9.126c0 .248.195.449.437.449h3.643a.443.443 0 0 0 .437-.449v-9.126h3.265c.241 0 .436-.2.436-.449l.002-3.617a.455.455 0 0 0-.128-.317.431.431 0 0 0-.31-.131h-3.265V6.794c0-1.017.236-1.533 1.526-1.533h1.87a.444.444 0 0 0 .437-.45V1.454a.443.443 0 0 0-.436-.448Z"
    />
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12c0-4.191 0-6.287 1.05-7.733A5.5 5.5 0 0 1 4.267 3.05C5.713 2 7.81 2 12 2s6.287 0 7.733 1.05a5.5 5.5 0 0 1 1.217 1.217C22 5.713 22 7.81 22 12s0 6.287-1.05 7.733a5.5 5.5 0 0 1-1.217 1.217C18.287 22 16.19 22 12 22s-6.287 0-7.733-1.05a5.5 5.5 0 0 1-1.217-1.217C2 18.287 2 16.19 2 12Zm10.001-5.297a5.294 5.294 0 1 0 0 10.589 5.294 5.294 0 0 0 0-10.589Zm0 8.603a3.313 3.313 0 0 1-3.309-3.309 3.313 3.313 0 0 1 3.31-3.309 3.313 3.313 0 0 1 3.308 3.31 3.313 3.313 0 0 1-3.309 3.308Zm6.394-8.999a.705.705 0 1 1-1.41 0 .705.705 0 0 1 1.41 0Z"
    />
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const CopyrightIcon = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    {...rest}
    className={`w-6 h-6 ${className}`}
  >
    <path
      d="M10.688 16.096c-1.11 0-2.112-.245-3.008-.736a5.48 5.48 0 0 1-2.096-2.032c-.501-.875-.752-1.85-.752-2.928 0-1.077.25-2.048.752-2.912A5.415 5.415 0 0 1 7.696 5.44c.896-.49 1.899-.736 3.008-.736.832 0 1.6.139 2.304.416A4.776 4.776 0 0 1 14.8 6.336l-.752.752c-.875-.885-1.979-1.328-3.312-1.328-.885 0-1.69.203-2.416.608a4.501 4.501 0 0 0-1.712 1.664C6.203 8.736 6 9.525 6 10.4c0 .875.203 1.664.608 2.368a4.501 4.501 0 0 0 1.712 1.664c.725.405 1.53.608 2.416.608 1.344 0 2.448-.448 3.312-1.344l.752.752a4.912 4.912 0 0 1-1.808 1.232 6.232 6.232 0 0 1-2.304.416Z"
      fill="currentColor"
    />
    <circle cx={10} cy={10} r={9.5} stroke="currentColor" />
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

  
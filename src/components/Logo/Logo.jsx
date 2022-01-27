const Logo = (props) => {
  return (
    <svg
      viewBox="0 0 124 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className || ""}
    >
      <g filter="url(#filter0_d_78_875)">
        <path
          d="M74.0918 39.5688L54.9834 62.5738L25.5063 57.5279L15.1376 29.4771L34.246 6.47212L63.7231 11.518L74.0918 39.5688Z"
          fill="#7CD1B8"
        />
        <path
          d="M118.669 77.8645L99.561 100.869L70.084 95.8236L59.7153 67.7727L78.8237 44.7678L108.301 49.8137L118.669 77.8645Z"
          fill="#FABB51"
        />
        <path
          d="M64 98.5229L44.8916 121.528L15.4145 116.482L5.04588 88.4312L24.1543 65.4262L53.6313 70.4721L64 98.5229Z"
          fill="#FAEDC6"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_78_875"
          x="1.04589"
          y="6.47212"
          width="121.624"
          height="123.056"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_78_875"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_78_875"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;

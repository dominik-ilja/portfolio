type Props = {
  className?: string;
};

const Code = (props: Props) => {
  return (
    <svg
      className={props.className || "h-6"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_122_1865)">
        <path
          d="M6.65829 11.7583L3.39996 8.5L6.65829 5.24167L5.66663 4.25L1.41663 8.5L5.66663 12.75L6.65829 11.7583ZM10.3416 11.7583L13.6 8.5L10.3416 5.24167L11.3333 4.25L15.5833 8.5L11.3333 12.75L10.3416 11.7583Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath>
          <rect width="17" height="17" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Code;

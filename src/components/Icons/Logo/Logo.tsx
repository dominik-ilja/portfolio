type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  return (
    <svg
      className={props.className}
      width="100%"
      height="100%"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.745 6.28956L6.28516 60.2544L60.25 74.7142L74.7098 20.7494L20.745 6.28956Z"
        stroke="#A8891B"
        strokeWidth="0.5"
        strokeMiterlimit="10" />
      <path
        d="M30.2797 2.34241L2.34546 50.7259L50.729 78.6602L78.6632 30.2766L30.2797 2.34241Z"
        stroke="#A8891B"
        strokeWidth="0.5"
        strokeMiterlimit="10" />
      <path
        d="M40.505 1.00003L1 40.505L40.505 80.01L80.01 40.505L40.505 1.00003Z"
        stroke="#A8891B"
        strokeWidth="0.5"
        strokeMiterlimit="10" />
      <path
        d="M50.729 2.34982L2.34546 30.2841L30.2797 78.6676L78.6632 50.7333L50.729 2.34982Z"
        stroke="#A8891B"
        strokeWidth="0.5"
        strokeMiterlimit="10" />
      <path
        d="M60.25 6.312L6.28516 20.7718L20.745 74.7366L74.7098 60.2768L60.25 6.312Z"
        stroke="#A8891B"
        strokeWidth="0.5"
        strokeMiterlimit="10" />
      <path
        d="M68.4361 12.5863H12.5676V68.4547H68.4361V12.5863Z"
        stroke="#A8891B"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Logo;

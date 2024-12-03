import { SVGProps } from "react";

type Icon = SVGProps<SVGSVGElement>;

export const Icons = {
  CrossIcon: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      strokeWidth="1"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      />
    </svg>
  ),
  TriangleRightIcon: (props: Icon) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 11L6 4L10.5 7.5L6 11Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
};

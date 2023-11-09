import { FC } from 'react';
import { IIconProps } from './types';

export const NavigationIcon: FC<IIconProps> = ({ fill = 'none', height = 25, width = 25 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>navigation</title>
      <g id="Page-1" stroke="none" strokeWidth="1" className={fill} fillRule="evenodd">
        <g id="icon" className="fill-gray-500" transform="translate(42.666667, 42.666667)">
          <path
            d="M213.333333,3.55271368e-14 C331.15408,3.55271368e-14 426.666667,95.5125867 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M234.667936,43.9872251 L234.666667,85.3333333 L192,85.3333333 L191.998065,43.9873081 C114.800319,53.6146255 53.6146255,114.800319 43.9873081,191.998065 L85.3333333,192 L85.3333333,234.666667 L43.9872251,234.667936 C53.6142741,311.865996 114.800098,373.052014 191.998065,382.679359 L192,341.333333 L234.666667,341.333333 L234.667936,382.679442 C311.866218,373.052365 373.052365,311.866218 382.679442,234.667936 L341.333333,234.666667 L341.333333,192 L382.679483,191.999065 C373.052542,114.800626 311.866329,53.6143157 234.667936,43.9872251 Z M320,106.666667 L245.333333,245.333333 L106.666667,320 L181.333333,181.333333 L320,106.666667 Z M213.333333,192 C201.551259,192 192,201.551259 192,213.333333 C192,225.115408 201.551259,234.666667 213.333333,234.666667 C225.115408,234.666667 234.666667,225.115408 234.666667,213.333333 C234.666667,201.551259 225.115408,192 213.333333,192 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
};

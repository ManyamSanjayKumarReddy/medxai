import type { FC, ImgHTMLAttributes } from "react";

export type HumeLogoProps = ImgHTMLAttributes<HTMLImageElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <img
      src="/images/logobrand.png" // Make sure this path points to your logo
      alt="Medxbay"
      width="106"
      height="25"
      {...props} // Spread other props for flexibility
    />
  );
};

export default HumeLogo;

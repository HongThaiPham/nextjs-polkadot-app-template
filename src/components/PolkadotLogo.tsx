import { LucideProps } from "lucide-react";
import React from "react";

const PolkadotLogo: React.FC<LucideProps> = (props) => {
  return (
    <svg
      id="Logo"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1326.1 1410.3"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".st0{fill:#e6007a}"}</style>
      <ellipse className="st0" cx={663} cy={147.9} rx={254.3} ry={147.9} />
      <ellipse className="st0" cx={663} cy={1262.3} rx={254.3} ry={147.9} />
      <ellipse
        transform="rotate(-60 180.499 426.56)"
        className="st0"
        cx={180.5}
        cy={426.5}
        rx={254.3}
        ry={148}
      />
      <ellipse
        transform="rotate(-60 1145.575 983.768)"
        className="st0"
        cx={1145.6}
        cy={983.7}
        rx={254.3}
        ry={147.9}
      />
      <ellipse
        transform="rotate(-30 180.45 983.72)"
        className="st0"
        cx={180.5}
        cy={983.7}
        rx={148}
        ry={254.3}
      />
      <ellipse
        transform="rotate(-30 1145.522 426.601)"
        className="st0"
        cx={1145.6}
        cy={426.6}
        rx={147.9}
        ry={254.3}
      />
    </svg>
  );
};

export default PolkadotLogo;

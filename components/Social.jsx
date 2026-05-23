import Link from "next/link";

import { FaGithub, FaYoutube } from "react-icons/fa";
import { SiNotion, SiGoogledrive, SiFigma } from "react-icons/si";

// Replace "#" with real URLs (Drive folder, Figma file, concept video, etc.) when ready.
const socials = [
  { icon: <SiGoogledrive />, path: "#" },   // shared Drive folder
  { icon: <SiFigma />, path: "#" },         // Figma prototype
  { icon: <FaYoutube />, path: "#" },       // concept video
  { icon: <SiNotion />, path: "#" },        // team Notion / project board
  { icon: <FaGithub />, path: "#" },        // optional repo
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;

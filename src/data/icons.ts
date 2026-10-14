import { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IconName } from "./types";

export const icons: Record<IconName, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  x: FaXTwitter,
};

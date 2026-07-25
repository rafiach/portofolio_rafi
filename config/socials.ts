import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@rafiach",
    icon: Icons.gitHub,
    link: "https://github.com/rafiach",
  },
  {
    name: "LinkedIn",
    username: "Rafi_ach",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/rafiach",
  },
  {
    name: "Gmail",
    username: "Rafi_ach",
    icon: Icons.gmail,
    link: "mailto:achmadfahrudi153@gmail.com",
  },
];

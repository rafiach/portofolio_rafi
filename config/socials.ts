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
    username: "achmadfahrudi153@gmail.com",
    icon: Icons.gmail,
    link: "mailto:achmadfahrudi153@gmail.com",
  },
  {
    name: "Instagram",
    username: "mas.mobi",
    icon: Icons.instagram,
    link: "https://www.instagram.com/mas.mobi/",
  },
  {
    name: "Whatsapp",
    username: "Rafi Achmad Fachrudi",
    icon: Icons.whatsapp,
    link: "https://wa.me/6289616728581",
  },
];

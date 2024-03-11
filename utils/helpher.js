import {
  CircleFadingPlus,
  Heart,
  LogOut,
  MessageSquare,
  Settings,
  UserRound,
} from "lucide-react";

export const menuOptions = [
  {
    href: "/profile",
    label: " Profile",
    svg: <UserRound />,
  },
  {
    href: "/settings",
    label: "Settings",
    svg: <Settings />,
  },
  {
    href: "/invite-friends",
    label: "Invite Friends",
    svg: <CircleFadingPlus />,
  },
  {
    href: "/feedback",
    label: "Feedback",
    svg: <MessageSquare />,
  },
  {
    href: "/upgrade",
    label: "Upgrade",
    svg: <Heart />,
  },
  {
    href: "/SignOut",
    label: "SignOut",
    svg: <LogOut />,
  },
];

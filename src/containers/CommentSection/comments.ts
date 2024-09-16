import User1 from "@/assets/users/user_1.png";
import User2 from "@/assets/users/user_2.png";
import User3 from "@/assets/users/user_3.png";
import User4 from "@/assets/users/user_4.png";
import { StaticImageData } from "next/image";

export type CommentType = {
  name: string;
  avatar: StaticImageData | string;
  timestamp: number;
  message: string;
};

export const COMMENTS: CommentType[] = [
  {
    name: "Jane Smith",
    avatar: User2,
    timestamp: 1726202400000,
    message: "Everything is on track! No delays expected.",
  },
  {
    name: "Marcial Cabrera",
    avatar: User1,
    timestamp: 1726279200000,
    message: "Looks like Solana is breaking a key resistance level!",
  },
  {
    name: "Jane Smith",
    avatar: User2,
    timestamp: 1726286400000,
    message:
      "The 24h trading volume has spiked. Could be a signal for a breakout.",
  },
  {
    name: "Emily Brown",
    avatar: User3,
    timestamp: 1726288800000,
    message: "Good to hear! Let me know if you need any help.",
  },
  {
    name: "Emily Brown",
    avatar: User3,
    timestamp: 1726293600000,
    message:
      "I’m noticing a divergence in the RSI. Might need to be cautious here.",
  },
  {
    name: "John Doe",
    avatar: User4,
    timestamp: 1726300800000,
    message:
      "The market cap is holding steady, but I’d keep an eye on the support level.",
  },
  {
    name: "Marcial Cabrera",
    avatar: User1,
    timestamp: 1726308000000,
    message: "Agreed, if it drops below this level, we might see a correction.",
  },
  {
    name: "Jane Smith",
    avatar: User2,
    timestamp: 1726315200000,
    message:
      "It’s interesting how the circulating supply hasn’t impacted the price much yet.",
  },
  {
    name: "Emily Brown",
    avatar: User3,
    timestamp: 1726322400000,
    message:
      "There’s definitely some whale activity. Keep an eye on the big movements.",
  },
  {
    name: "John Doe",
    avatar: User4,
    timestamp: 1726329600000,
    message:
      "A potential 5% increase if the trend continues. I’m bullish short term.",
  },
  {
    name: "Marcial Cabrera",
    avatar: User1,
    timestamp: 1726336800000,
    message: "Same here. I’d look to exit around $25 if the momentum keeps up.",
  },
  {
    name: "Jane Smith",
    avatar: User2,
    timestamp: 1726344000000,
    message:
      "Volume is still high, but we should watch for any sharp pullbacks.",
  },
  {
    name: "Emily Brown",
    avatar: User3,
    timestamp: 1726351200000,
    message: "It could hit resistance around $24.5. Let’s see if it holds.",
  },
  {
    name: "John Doe",
    avatar: User4,
    timestamp: 1726358400000,
    message: "If we see a breakout, the next target might be $26.",
  },
  {
    name: "Marcial Cabrera",
    avatar: User1,
    timestamp: 1726358400000,
    message: "Looks like we’re almost there. Any blockers?",
  },
  {
    name: "Marcial Cabrera",
    avatar: User1,
    timestamp: 1726365600000,
    message:
      "The chart is looking strong. We could have a solid weekend rally.",
  },
];

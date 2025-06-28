import Link from "next/link";
import { cn } from "@/libs/utils";
import LoginPopUp from "../../login/LoginPopUp";

type AccountItemProps = {
  item: { Name: string; Path: string; Icon: any };
  isCenter: boolean;
  isActive: boolean;
  cookie: boolean;
};

function AccountNavItem({
  item,
  isCenter,
  isActive,
  cookie,
}: AccountItemProps) {
  const Icon = item.Icon;

  const iconElement = (
    <Icon
      className={cn(
        "h-5 w-5 transition-transform duration-300",
        isActive && "scale-125"
      )}
    />
  );

  const label = !isCenter && (
    <span className="group-hover:scale-110">{item.Name}</span>
  );

  const baseClass = cn(
    "group flex flex-col items-center justify-center gap-1 text-[11px] text-zinc-500 transition-all duration-300 ease-in-out hover:text-prbg-primary",
    isActive && "text-prbg-primary font-bold",
    isCenter &&
      "relative -top-4 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110"
  );

  if (cookie) {
    return (
      <div className={baseClass}>
        <Link href={item.Path} className="flex flex-col items-center">
          {iconElement}
          {label}
        </Link>
      </div>
    );
  }

  return (
    <div className={baseClass}>
      <div className="flex flex-col items-center">
        <LoginPopUp />
        {label}
      </div>
    </div>
  );
}

export default AccountNavItem;

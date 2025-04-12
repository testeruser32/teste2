"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BookOpenIcon,
  NewspaperIcon,
  Bars2Icon,
  Battery100Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clxs from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Only Seven Exercises",
    href: "/dashboard/onlySevenExcersises",
    icon: BookOpenIcon,
  },
  {
    name: "One time twin",
    href: "/dashboard/oneTimeTwin",
    icon: Battery100Icon,
  },
  {
    name: "One time week",
    href: "/dashboard/oneTimeWeek",
    icon: Battery100Icon,
  },
  { name: "Two Times Week", href: "/dashboard/twoTimesWeek", icon: Bars2Icon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  {
    name: "Testando rotas",
    href: "/dashboard/testestestandorotas",
    icon: NewspaperIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clxs(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-sky-100 text-blue-600": pathname === link.href, },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

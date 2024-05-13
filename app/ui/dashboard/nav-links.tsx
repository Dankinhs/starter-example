'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'; // 从 Heroicons 库中导入 UserGroupIcon、HomeIcon 和 DocumentDuplicateIcon 图标组件
import { Liu_Jian_Mao_Cao } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// 导航链接的映射。根据应用程序的规模，这些链接可能存储在数据库中。
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon }, // 首页链接，跳转到 '/dashboard' 页面，使用 HomeIcon 图标
  {
    name: 'Invoices', // 发票链接
    href: '/dashboard/invoices', // 跳转到 '/dashboard/invoices' 页面
    icon: DocumentDuplicateIcon, // 使用 DocumentDuplicateIcon 图标
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon }, // 客户链接，跳转到 '/dashboard/customers' 页面，使用 UserGroupIcon 图标
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name} // 设置每个链接的唯一 key
            href={link.href} // 链接的目标地址
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" /> {/* 使用对应的图标组件 */}
            <p className="hidden md:block">{link.name}</p> {/* 链接名称 */}
          </Link>
        );
      })}
    </>
  );
}


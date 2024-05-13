import Link from 'next/link'; // 导入 Next.js 的 Link 组件，用于实现客户端导航
import NavLinks from '@/app/ui/dashboard/nav-links'; // 导入 NavLinks 组件
import AcmeLogo from '@/app/ui/acme-logo'; // 导入 AcmeLogo 组件
import { PowerIcon } from '@heroicons/react/24/outline'; // 导入 PowerIcon 组件

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2"> {/* 主要布局容器 */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link> {/* 导航链接，点击可导航到首页 */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"> {/* 用于排列内容的容器 */}
        <NavLinks /> {/* 渲染 NavLinks 组件 */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> {/* 隐藏的占位容器 */}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" /> {/* 渲染 PowerIcon 图标 */}
            <div className="hidden md:block">Sign Out</div> {/* 登出按钮文本 */}
          </button>
        </form> {/* 登出表单 */}
      </div>
    </div>
  );
}

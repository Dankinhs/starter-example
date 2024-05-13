import { GlobeAltIcon } from '@heroicons/react/24/outline'; // 导入 Heroicons 库中的 GlobeAltIcon 图标组件
import { lusitana } from '@/app/ui/fonts'; // 从 '@/app/ui/fonts' 导入 lusitana 字体样式

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    > {/* 渲染一个 div 元素，应用 lusitana 字体样式以及弹性布局，水平排列，垂直居中对齐，取消行高，文字颜色设置为白色 */}
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> {/* 渲染 GlobeAltIcon 图标组件，设置图标的高度和宽度为 12 个单位，并旋转 15 度 */}
      <p className="text-[44px]">Acme</p> {/* 渲染一个 p 元素，设置文字大小为 44 像素，内容为 "Acme" */}
    </div>
  );
}


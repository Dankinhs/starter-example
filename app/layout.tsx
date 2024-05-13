/* 导入全局 CSS 样式 */
import '@/app/ui/global.css';
/* 导入自定义字体 */
import { inter } from '@/app/ui/fonts';

/* 定义 RootLayout 组件 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* 返回 HTML 结构 */
  return (
    <html lang="en">
      {/* 设置 body 的类名，包括自定义字体和抗锯齿属性 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


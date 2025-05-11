// 在您的路由配置文件中（如 AppRouter.tsx）
import { BrowserRouter as Router, Routes, Route } from 'react-router'; // 修改导入路径
import { lazy } from 'react'

// 懒加载组件
const ChatHome = lazy(() => import('@/pages/chat-home'));
const MagicShow = lazy(() => import('@/pages/magic-show'));

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<ChatHome />} />
        <Route path="/magic-show" element={<MagicShow />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
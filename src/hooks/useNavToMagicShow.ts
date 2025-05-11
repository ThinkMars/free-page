import { useNavigate } from "react-router";
/**
 * 导航到魔法秀页面
 */
function useNavToMagicShow() {
  const navigate = useNavigate();

  const handleNavToMagicShow = (prompt: string) => {
    if (prompt.trim()) {
      void navigate(`/magic-show?message=${encodeURIComponent(prompt)}`);
    }
  };

  return {
    handleNavToMagicShow,
  };
}

export { useNavToMagicShow };
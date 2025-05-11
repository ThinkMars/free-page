import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

function Header() {
  toast.success("链接已复制到剪贴板");
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success("链接已复制到剪贴板");
      })
      .catch(() => {
        toast.error("复制链接失败");
      });
  };
  return (
    <>
      <div className="flex items-center justify-between p-2 bg-gray-100">
        <h1 className="text-base font-bold text-gray-800">ThinkMars</h1>
        <Button onClick={handleShare} variant={"ghost"} size={"sm"} className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <Share2 className="w-5 h-5 text-gray-600" />
          <span className="sr-only">分享</span>
        </Button>
      </div>
      <Toaster />
    </>
  );
};

export default Header;
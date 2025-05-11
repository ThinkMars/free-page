import ChatInput from "@/components/chat-input";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useNavToMagicShow } from "@/hooks/useNavToMagicShow";

function ChatHome() {
  const { handleNavToMagicShow } = useNavToMagicShow();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-100">
        <h1 className="animate-bounce text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Magic Page
        </h1>
        <p className="mb-16 text-sm bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">欢迎来到AI魔法页</p>
        <div className="text-gray-600 flex justify-center items-center mb-4 text-sm">示例：
          <Button onClick={() => { handleNavToMagicShow("放烟花") }} size={"sm"} variant={"link"} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
            放烟花
          </Button>
          <Button onClick={() => { handleNavToMagicShow("母亲节的好看特效") }} size={"sm"} variant={"link"} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
            母亲节的好看特效
          </Button>
        </div>
        <div style={{ width: 'calc(100% - 24px)' }} className="w-full mx-3 max-w-md p-4 bg-white rounded-lg shadow-md">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default ChatHome;
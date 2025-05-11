import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavToMagicShow } from '@/hooks/useNavToMagicShow';
import { useState } from 'react';

function ChatInput() {
  const [inputValue, setInputValue] = useState("");
  const { handleNavToMagicShow } = useNavToMagicShow();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 禁止输入空格
    const valueWithoutSpaces = e.target.value.replace(/\s+/g, '');
    setInputValue(valueWithoutSpaces);
  };

  return (
    <div className="flex items-center justify-between w-full p-1 rounded-lg">
      <Input
        type="text"
        placeholder="输入任何你想要显示的内容"
        maxLength={50}
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-lg"
      />
      <Button
        disabled={!inputValue}
        onClick={() => { handleNavToMagicShow(inputValue) }}
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
        施魔法
      </Button>
    </div>
  );
}

export default ChatInput;
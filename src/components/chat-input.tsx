import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavToMagicShow } from '@/hooks/useNavToMagicShow';
import { useState } from 'react';

function ChatInput() {
  const [inputValue, setInputValue] = useState("");
  const { handleNavToMagicShow } = useNavToMagicShow();
  const [isComposing, setIsComposing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isComposing) return; // 组合输入期间不处理

    // 禁止输入空格
    const valueWithoutSpaces = e.target.value.replace(/\s+/g, '').trim();
    setInputValue(valueWithoutSpaces);
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false);
    // 可选：compositionend 后再执行一次处理
    const valueWithoutSpaces = e.currentTarget.value.replace(/\s+/g, '');
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
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
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

/**
 * Loading组件的属性
 */
interface LoadingProps {
  text: string;
}

export default function Loading({ text }: LoadingProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <div className="mb-24">
          {/* 文字动画 */}
          <span className="text-l text-blue-500 font-bold">
            {text.split('').map((char: string, index: number) => (
              <span
                key={index}
                className="inline-block animate-bounce"
                style={{ animationDelay: `${(index * 0.3).toString()}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
        <div className="w-32 h-32 relative mx-auto">
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-4 border-blue-300 border-b-transparent rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold">Magic Page</div>
        </div>
      </div>
    </div>
  );
}
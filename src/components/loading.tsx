
/**
 * Loading组件的属性
 */
interface LoadingProps {
  text?: string;
  title?: string;
}

export default function Loading({ title = "Loading", text }: LoadingProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center w-screen h-screen flex items-center justify-center">
        {/* 波纹动画 */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-4 border-blue-300 border-b-transparent rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold">
            {title}
          </div>
        </div>

        {/* 文字动画 */}
        <div className="mt-24 absolute bottom-40 left-1/2 transform -translate-x-1/2">
          <span className="text-l text-blue-500 font-bold">
            {text?.split('').map((char: string, index: number) => (
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
      </div>
    </div>
  );
}
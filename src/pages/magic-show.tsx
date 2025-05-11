import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { useLocation } from "react-router";
import Loading from "@/components/loading";
function MagicShow() {
  const [htmlString, setHtmlString] = useState('');
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  // 根据messageId判断是预览还是新建
  const message = params.get('message') ?? '';
  const messageId = params.get('messageId') ?? '';

  const { data, isLoading, isError } = useQuery<string>({
    queryKey: ['magic-show-data', messageId],
    retry: 1,
    gcTime: 0,
    queryFn: async () => {
      const baseUrl = messageId ? `${import.meta.env.VITE_API_URL as string}/magic-page/preview` : `${import.meta.env.VITE_API_URL as string}/magic-page`;

      const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({ message, messageId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('获取数据失败');
      }

      return await response.text();
    }
  });

  useEffect(() => {
    if (data) {
      setHtmlString(data);
    }
  }, [data]);

  return (
    <div>
      {isLoading && <Loading title="Magic Page" text="魔法即将生效..." />}
      {isError && <p>获取数据失败，请重试。</p>}
      {!isLoading && !isError && data && (
        <iframe srcDoc={htmlString} style={{ width: '100%', height: '100vh' }} />
      )}
    </div>
  );
}

export default MagicShow;
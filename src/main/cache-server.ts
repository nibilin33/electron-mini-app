// 创建一个 http 服务，用于缓存静态文件和 api get 请求
import * as http from 'http';
export function createCacheServer() {
  const server = http.createServer(async (req, res) => {
    const url = req.url;
    
  });

  try {
    server.listen(8989);
  } catch (e) {
    // 按已启动处理，不抛出异常
    console.error('cache server 启动失败', e);
  }
}
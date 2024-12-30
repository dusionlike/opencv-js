import fs from 'fs'
import path from 'path'

export function extractWasmPlugin() {
  return {
    name: 'extract-wasm',
    setup(build: any) {
      build.onLoad({ filter: /\.js$/ }, async (args: any) => {
        const contents = await fs.promises.readFile(args.path, 'utf8')
        const match = contents.match(/var\s+wasmBinaryFile\s*=\s*"data:application\/octet-stream;base64,([^"]+)"/)
        
        if (match) {
          const base64Data = match[1]
          const wasmBuffer = Buffer.from(base64Data, 'base64')
          
          // 保存wasm文件
          const wasmPath = path.join(path.dirname(args.path), 'opencv.wasm')
          await fs.promises.writeFile(wasmPath, wasmBuffer)
          
          // 替换原始代码中的base64为wasm文件路径
          const newContents = contents.replace(
            /var\s+wasmBinaryFile\s*=\s*"data:application\/octet-stream;base64,[^"]+"/,
            'var wasmBinaryFile = __OPENCV_WASM_BINARY_PATH__'
          )
          
          return {
            contents: newContents
          }
        }
        
        return null
      })
    }
  }
}

---
title: 配置Alias
order: 1
---

## 配置 Alias

### 开发: 配置 tsconfig.json

为了在

在根目录下修改 `tsconfig.json` 中的 `path` 参数项:

```json
{
  "baseUrl": ".",
  "paths": {
    "<module-name>": ["./packages/<path-name>/src"]
    "@ims-view/bar": ["./packages/bar/src"]
  }
}
```

### 测试: 配置 Jest

为了在测试中能够正常识别其他引用

在根目录下修改 `jest.config.base.ts` 中的 `moduleNameMapper` 参数:

```typescript
const config = {
  // ...
  moduleNameMapper: {
    '@ims-view/bar': '<rootDir>/packages/bar/src',
    "<module-name>": "'<rootDir>/packages/<path-name>/src"]
  },
};
```

然后需要在 根目录的 `.dumirc` 文件中配置 `alias` 配置项

```ts
 alias: {
    '@ims-view/foo': path.join(__dirname, './packages/foo/src'),
    '@ims-view/bar': path.join(__dirname, './packages/bar/src'),
  },
```

<code src='./demo.tsx'>demo</code>

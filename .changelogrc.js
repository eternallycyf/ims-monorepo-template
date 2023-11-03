module.exports = {
  scopeDisplayName: {
    scripts: '脚本',
    changelog: '日志',
    config: '配置',
    release: '自动发布',
    types: '类型',
    readme: '说明文档',
    guide: '指南',
  },
  titleLanguage: 'zh-CN',
  displayTypes: ['feat', 'fix', 'styles', 'pref', 'chore', 'docs'],
  showSummary: true,
  reduceHeadingLevel: true,
  newlineTimestamp: true,
  addBackToTop: false,
  customTypeMap: {
    feat: {
      emoji: '✨',
      'en-US': 'Features',
      'zh-CN': '新特性',
      subtitle: "What's improved",
    },
    fix: {
      emoji: '🐛',
      'en-US': 'Bug Fixes',
      'zh-CN': '修复',
      subtitle: "What's fixed",
    },
    build: {
      emoji: '👷',
      'en-US': 'Build System',
      'zh-CN': '构建系统',
      subtitle: 'Build system',
    },
    chore: {
      emoji: '🎫',
      'en-US': 'Chores',
      'zh-CN': '杂项',
      subtitle: 'Chores',
    },
    ci: {
      emoji: '🔧',
      'en-US': 'Continuous Integration',
      'zh-CN': '持续集成',
      subtitle: 'Continuous integration',
    },
    docs: {
      emoji: '📝',
      'zh-CN': '文档',
      'en-US': 'Documentation',
      subtitle: 'Documentation',
    },
    test: {
      emoji: '✅',
      'zh-CN': '测试',
      'en-US': 'Tests',
      subtitle: 'Tests',
    },
    perf: {
      emoji: '⚡',
      'en-US': 'Performance Improvements',
      'zh-CN': '性能优化',
      subtitle: 'Performance improvements',
    },
    refactor: {
      emoji: '♻',
      'en-US': 'Code Refactoring',
      'zh-CN': '重构',
      subtitle: 'Code refactoring',
    },
    revert: {
      emoji: '⏪',
      'zh-CN': '回滚',
      'en-US': 'Reverts',
      subtitle: 'Reverts',
    },
    style: {
      emoji: '💄',
      'en-US': 'Styles',
      'zh-CN': '样式',
      subtitle: 'Styles',
    },
    pref: {
      emoji: '👌',
      'en-US': 'Pref',
      'zh-CN': '优化',
      subtitle: 'Pref',
    },
  },
};

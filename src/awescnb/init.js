import { prettyLog } from 'utils/helpers'
import { __DEV__ } from 'constants/env'
import { getThemeOptions } from 'options/extra'

/**
 * 创建开发环境配置
 */
function setDevOptions() {
    if (__DEV__) {
        window.opts = {}
    }
}

/**
 * 隐藏 loading
 */
function hideLoading() {
    const loading = $('#loading')
    if (loading.length) {
        loading.fadeOut(300)
    }
}

/**
 * 控制台打印 awescnb 信息
 */
function printInfo(themeOptions) {
    const { log } = getThemeOptions(themeOptions)
    if (!log) return
    if (__DEV__) return
    const logs = [
        {
            str: '# # # # # # # # # # # # # # # # # # # # # # # #',
            color: '#1e90ff',
        },
        {
            str: '# 🔮 w3cHack: awesome cnblog!',
            color: '#eb4d4b',
        },
        {
            str: '# 👌 以鲸挑细选的内容，服务于所有爱学习的你们。欢迎来搞我 - 小鲸',
            color: '#a29bfe',
        },
        {
            str: '# 🐧 Group：1149059042',
            color: '#55efc4',
        },
        {
            str: '# 🌏 GitHub：https://github.com/Evllis',
            color: '#f368e0',
        },
        {
            str: '# # # # # # # # # # # # # # # # # # # # # # # #',
            color: '#1e90ff',
        },
    ]
    for (const { str, color } of logs) {
        prettyLog(str, color)
    }
}

export default options => {
    setDevOptions()
    hideLoading()
    printInfo(options)
}

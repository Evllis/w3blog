import './style/index.scss'
import { createTheme } from 'awescnb'
import build from './build'
import {
    live2d,
    player,
    clickEffect,
    titleFavicon,
    themeColor,
} from 'plugins/index'

const element = createTheme()

build()

element
    .use(live2d)
    .use(player, {
        enable: false,
    })
    .use(clickEffect)
    .use(titleFavicon)
    .use(themeColor)

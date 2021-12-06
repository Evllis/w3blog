import './index.less'
import { getLinksOptions } from 'options/extra'

const links = getLinksOptions()

// const navbars = [
//     {
//         title: '标签',
//         url: 'https://www.cnblogs.com/esofar/tag/',
//     },
//     {
//         title: '朋友',
//         chilren: [
//             {
//                 title: '百度',
//                 target: '_blank',
//                 url: 'https://www.baidu.com',
//             },
//             {
//                 title: '谷歌',
//                 target: '_blank',
//                 url: 'https://www.google.com',
//             },
//         ],
//     },
// ]

function buildCustomHeader() {
    const navs = links
    const $navList = $('#navList')

    if (navs && navs.length) {
        navs.reverse().forEach(nav => {
            nav.target = nav.target || '_self'
            if (nav.chilren && nav.chilren.length) {
                var subnavs = nav.chilren.map(subnav => {
                    subnav.target = subnav.target || '_self'
                    return `<li><a class="menu" target="${subnav.target}" href="${subnav.url}">${subnav.name}</a></li>`
                })
                $navList.find('li').eq(1).after(`
                    <li class="esa-has-subnavs">
                        <a class="menu" href="javascript:void(0);">${nav.name}
                            <svg class="arrow" width="9px" height="9px" viewBox="0 0 13 7" xml:space="preserve" fill="none" stroke="var(--text-color)"><path d="M1,1l6.2,6L13,1"></path></svg>
                        </a>
                        <div class="esa-sub-navs"><div class="caret"></div><ul>${subnavs.join(
                            '',
                        )}</ul></div>
                    </li>`)
            } else {
                $navList
                    .find('li')
                    .eq(1)
                    .after(
                        `<li><a class="menu" target="${nav.target}" href="${nav.url}">${nav.name}</a></li>`,
                    )
            }
        })

        $('li.esa-has-subnavs').hover(
            function() {
                $(this)
                    .find('svg')
                    .addClass('open')
                $(this)
                    .find('.esa-sub-navs')
                    .fadeIn('fast')
            },
            function() {
                $(this)
                    .find('svg')
                    .removeClass('open')
                $(this)
                    .find('.esa-sub-navs')
                    .hide()
            },
        )
    }

    $.each($navList.children('li'), (_, nav) => {
        if (!$(nav).children('a').length) {
            $(nav).remove()
        }
    })

    $('#header').prepend(
        `<div class="esa-mobile-menu"><i class="fa fa-bars"></i></div>`,
    )
    $('.esa-mobile-menu').on('click', () => {
        $('#navigator').fadeToggle()
    })

    // if (!options.showNavAdmin) {
    //     $('#blog_nav_admin')
    //         .parent()
    //         .remove()
    // }
}

export default buildCustomHeader

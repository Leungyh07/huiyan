export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [ 
        {
            //二级路由
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            //二级路由
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            //二级路由
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            //二级路由
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}
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
            //多视图路由
            path : 'detail/1/:movieId',
            components : {
                default : ()=> import('@/components/NowPlaying'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            //多视图路由
            path : 'detail/2/:movieId',
            components : {
                default : ()=> import('@/components/ComingSoon'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}
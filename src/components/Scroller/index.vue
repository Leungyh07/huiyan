<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name : 'Scroller',
    props : {
        handleToScroll :{
            type : Function,
            default : function() {}
        },
        handleToTouchEnd :{
            type : Function,
            default : function() {}
        },
    },
    mounted(){
        var scroll = new BScroll( this.$refs.wrapper , {
            tap : true, //点击时可触发
            probeType : 1
        });

        this.scroll = scroll; //添加成属性，方便methods使用

        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
        });

        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
        })
    },
    methods : {
        toScrollTop(y){
            this.scroll.scrollTo(0,y); //跳转
        }
    }
}
</script>

<style scoped>
    .wrapper{ height: 100%;}
</style>
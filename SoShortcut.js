(function(){var a={VERSION:"2.3.3",Result:{SUCCEEDED:1,NOTRANSITION:2,CANCELLED:3,PENDING:4},Error:{INVALID_TRANSITION:100,PENDING_TRANSITION:200,INVALID_CALLBACK:300},WILDCARD:"*",ASYNC:"async",create:function(g,h){var j=(typeof g.initial=="string")?{state:g.initial}:g.initial;var f=g.terminal||g["final"];var e=h||g.target||{};var l=g.events||[];var i=g.callbacks||{};var c={};var k=function(m){var p=(m.from instanceof Array)?m.from:(m.from?[m.from]:[a.WILDCARD]);c[m.name]=c[m.name]||{};for(var o=0;o<p.length;o++){c[m.name][p[o]]=m.to||p[o]}};if(j){j.event=j.event||"startup";k({name:j.event,from:"none",to:j.state})}for(var d=0;d<l.length;d++){k(l[d])}for(var b in c){if(c.hasOwnProperty(b)){e[b]=a.buildEvent(b,c[b])}}for(var b in i){if(i.hasOwnProperty(b)){e[b]=i[b]}}e.current="none";e.is=function(m){return(m instanceof Array)?(m.indexOf(this.current)>=0):(this.current===m)};e.can=function(m){return !this.transition&&(c[m].hasOwnProperty(this.current)||c[m].hasOwnProperty(a.WILDCARD))};e.cannot=function(m){return !this.can(m)};e.error=g.error||function(o,s,r,n,m,q,p){throw p||q};e.isFinished=function(){return this.is(f)};if(j&&!j.defer){e[j.event]()}return e},doCallback:function(g,d,c,i,h,b){if(d){try{return d.apply(g,[c,i,h].concat(b))}catch(f){return g.error(c,i,h,b,a.Error.INVALID_CALLBACK,"an exception occurred in a caller-provided callback function",f)}}},beforeAnyEvent:function(d,c,f,e,b){return a.doCallback(d,d.onbeforeevent,c,f,e,b)},afterAnyEvent:function(d,c,f,e,b){return a.doCallback(d,d.onafterevent||d.onevent,c,f,e,b)},leaveAnyState:function(d,c,f,e,b){return a.doCallback(d,d.onleavestate,c,f,e,b)},enterAnyState:function(d,c,f,e,b){return a.doCallback(d,d.onenterstate||d.onstate,c,f,e,b)},changeState:function(d,c,f,e,b){return a.doCallback(d,d.onchangestate,c,f,e,b)},beforeThisEvent:function(d,c,f,e,b){return a.doCallback(d,d["onbefore"+c],c,f,e,b)},afterThisEvent:function(d,c,f,e,b){return a.doCallback(d,d["onafter"+c]||d["on"+c],c,f,e,b)},leaveThisState:function(d,c,f,e,b){return a.doCallback(d,d["onleave"+f],c,f,e,b)},enterThisState:function(d,c,f,e,b){return a.doCallback(d,d["onenter"+e]||d["on"+e],c,f,e,b)},beforeEvent:function(d,c,f,e,b){if((false===a.beforeThisEvent(d,c,f,e,b))||(false===a.beforeAnyEvent(d,c,f,e,b))){return false}},afterEvent:function(d,c,f,e,b){a.afterThisEvent(d,c,f,e,b);a.afterAnyEvent(d,c,f,e,b)},leaveState:function(f,e,h,g,d){var c=a.leaveThisState(f,e,h,g,d),b=a.leaveAnyState(f,e,h,g,d);if((false===c)||(false===b)){return false}else{if((a.ASYNC===c)||(a.ASYNC===b)){return a.ASYNC}}},enterState:function(d,c,f,e,b){a.enterThisState(d,c,f,e,b);a.enterAnyState(d,c,f,e,b)},buildEvent:function(b,c){return function(){var h=this.current;var g=c[h]||c[a.WILDCARD]||h;var e=Array.prototype.slice.call(arguments);if(this.transition){return this.error(b,h,g,e,a.Error.PENDING_TRANSITION,"event "+b+" inappropriate because previous transition did not complete")}if(this.cannot(b)){return this.error(b,h,g,e,a.Error.INVALID_TRANSITION,"event "+b+" inappropriate in current state "+this.current)}if(false===a.beforeEvent(this,b,h,g,e)){return a.Result.CANCELLED}if(h===g){a.afterEvent(this,b,h,g,e);return a.Result.NOTRANSITION}var f=this;this.transition=function(){f.transition=null;f.current=g;a.enterState(f,b,h,g,e);a.changeState(f,b,h,g,e);a.afterEvent(f,b,h,g,e);return a.Result.SUCCEEDED};this.transition.cancel=function(){f.transition=null;a.afterEvent(f,b,h,g,e)};var d=a.leaveState(this,b,h,g,e);if(false===d){this.transition=null;return a.Result.CANCELLED}else{if(a.ASYNC===d){return a.Result.PENDING}else{if(this.transition){return this.transition()}}}}}};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=a}exports.StateMachine=a}else{if(typeof define==="function"&&define.amd){define(function(b){return a})}else{if(typeof window!=="undefined"){window.StateMachine=a}else{if(typeof self!=="undefined"){self.StateMachine=a}}}}}());

//--------------------------------------------------
(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

//--------------------------------------------------

var shortcut = (function(){
    var $input = $('#keyword');
    var guideSelector = '.res-title, .mh-hd, #mh-cartoon_intro .img, .mh-video-list li';
    var guideClass = 'shortcut__guide';

    //快捷导航
    var initGuides = function(){
        $('.' + guideClass).remove();
        $(guideSelector).filter(':visible').filter(function(index, value){return $(value).visible(true, true)}).each(function(index, value){
            var offset = $(value).offset();
            var guide = $('<div class="' + guideClass + '" style="z-index:100;position:absolute;width: 55px;height:55px;line-height: 55px;font-size:25px;text-align:center;background:rgba(62,175,14,.8);color:#fff;border-radius:100%;">' + (index+1) + '</div>');
            guide.offset({top: offset.top - 20, left: offset.left + 10});
            $(document.body).append(guide);
        });
    };

    //搜索的抽象
    var avatar = StateMachine.create({
        initial: 'normal',
        events: [
            { name: 'search', from: '*', to: 'search' },
            { name: 'guide', from: ['normal', 'search'], to: 'guide' },
            { name: 'blur', form: ['search, guide'], to: 'normal'}
        ],
        callbacks: {
            onsearch: function(event, from, to){
                $input.select();
                window.scrollTo(0, 0);
            },
            onguide: function(event, from, to){
                initGuides();
                $('.shortcut__guide').fadeIn();
            },
            onblur: function(event, from, to){
                var $guides = $('.shortcut__guide');
                if($guides.length) {
                    $guides.fadeOut();
                }
            }
        }
    });

    //初始化
    var init = function(){
         $(document.body)
            .on('keyup', function(event){

                if(document.activeElement.nodeName !== 'BODY') return;

                if(event.keyCode === 83){
                    if(avatar.can('search')) {
                        avatar.search();
                    }
                }else if(event.keyCode === 16){
                    if(avatar.can('blur')) {
                        avatar.blur();
                    }
                }else if(event.shiftKey && event.keyCode > 48 && event.keyCode < 58){
                    window.open($(guideSelector).filter(':visible').filter(function(index, value){return $(value).visible(true, true)}).eq(event.keyCode - 49).find('a').eq(0).attr('href'));
                    avatar.blur();
                }
            })
            .on('keydown', function(event){

                if(document.activeElement.nodeName !== 'BODY') return;

                if(event.keyCode === 16){
                    if(avatar.can('guide')){
                        console.log('shift');
                        avatar.guide();
                    }
                }
            });
    };
    return {
        init: init
    }
})();

shortcut.init();
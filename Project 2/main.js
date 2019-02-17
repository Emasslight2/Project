new Vue({
    el: '#app',
    data: {
        text_eng:{
          header:{
            header_h1:"We've got the talent",
            header_text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          },
          main:{
            introduction_sec:{
              intro:"Introduction",
              text_inner:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero metus, venenatis sit amet diam in, ultrices egestas odio. Suspendisse posuere lobortis consectetur.",
              big_btn:"Pure Creativity."
            },
            work_sec:{
              tags:{
                all:'all',
                branding:'branding',
                web_design:'web design',
                mobile_ui:'mobile ui',
                illustrations:'illustrations'
              },
            }
          }
        },
        text_ru:{
          header:{
            header_h1:"У нас есть таланты",
            header_text:"Идейные соображения высшего порядка, а также постоянный количественный рост. Место обучения кадров влечет за собой процесс внедрения."
          },
          main:{
            introduction_sec:{
              intro:"Вступление",
              text_inner:"Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений. Систем массового участия."
            }
          }
        },
        ru:false,
        images:[
          {id: 1, image:'./images/Branding.png', tags:['all', 'branding'], name:'branding', text:"Restaurants" },
          {id: 2, image:'./images/Branding_2.png', tags:['all', 'branding'], name:'branding', text:"Ocean's beaches" },
          {id: 3, image:'./images/Mobile_UI.png', tags:['all', 'mobile_ui'], name:'mobile ui', text:"Google Mail" },
          {id: 4, image:'./images/Web_design_2.png', tags:['all', 'web_design'], name:'web wesign', text:"Portico" },
          {id: 5, image:'./images/Illustrations.png', tags:['all', 'illustrations'], name:'illustrations', text:"SMASH bros" },
          {id: 6, image:'./images/Web_design.png', tags:['all', 'web_design'], name:'web wesign', text:"SALT" },
          {id: 7, image:'./images/Creative_b.jpg', tags:['all', 'branding'], name:'branding', text:"Cofe pubs" },
          {id: 8, image:'./images/ADK_brand.png', tags:['all', 'branding'], name:'branding', text:"ADK Consulting" },
          {id: 9, image:'./images/Blackberry_desing.png', tags:['all', 'illustrations'], name:'illustrations', text:"Design Guidelines" },
          {id: 10, image:'./images/consulting_mobile.jpg', tags:['all', 'mobile_ui'], name:'mobile ui', text:"ANDER" },
          {id: 11, image:'./images/phone.png', tags:['all', 'mobile_ui'], name:'mobile ui', text:"boniad" },
          {id: 12, image:'./images/alamy_phone.jpg', tags:['all', 'mobile_ui'], name:'mobile ui', text:"alamy" },
          {id: 13, image:'./images/web.png', tags:['all', 'web_design'], name:'web wesign', text:"Envoy" },
        ],
        currentTag: 'all',
        applyVisibility:false,
        videoSource:'https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4',
        videoShow:false,
        features:[
          {id: 1, image:'./slider/smartphone.png', name:'App Design', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet." },
          {id: 2, image:'./slider/pad.png', name:'Responsive Layout', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet." },
          {id: 3, image:'./slider/laptop.png', name:'Pixel Perfect Design', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet." },
          {id: 4, image:'./slider/laptop.png', name:'Pixel Perfect Design', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet." },
          {id: 5, image:'./slider/pad.png', name:'Responsive Layout', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet." },
          {id: 6, image:'./slider/smartphone.png', name:'App Design', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet." }
        ]
    },
    computed:{
      filteredImages: function(){
        var filter = this.currentTag;
        return this.images.filter(function(img){
          return img.tags.indexOf(filter) !== -1;
        }).slice(0,6);
      }
    },
    methods:{
      filter: function(tag){
        this.currentTag = tag;
      },
      leftBtn: function(){
        this.scrollToStart();
      },
      rightBtn: function(){
        this.scrollToEnd();
      },
      scrollToStart:function(){
        var container = this.$el.querySelector("#slider");
        container.scrollRight=container.scroll(0,0);
      },
      scrollToEnd: function(){
        var container = this.$el.querySelector("#slider");
        container.scrollLeft=container.scrollWidth;
      },
      
    }
});
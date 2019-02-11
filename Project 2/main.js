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
          {id: 1, image:'./images/Branding.png', tags:['all', 'branding'] },
          {id: 2, image:'./images/Branding_2.png', tags:['all', 'branding'] },
          {id: 3, image:'./images/Mobile_UI.png', tags:['all', 'mobile_ui'] },
          {id: 4, image:'./images/Web_design_2.png', tags:['all', 'web_design'] },
          {id: 5, image:'./images/Illustrations.png', tags:['all', 'illustrations'] },
          {id: 6, image:'./images/Web_design.png', tags:['all', 'web_design'] },
          {id: 7, image:'Creative_b.jpg', tags:['all', 'branding'] },
          {id: 8, image:'ADK_brand.png', tags:['all', 'branding'] },
          {id: 9, image:'Blackberry_desing.png', tags:['all', 'illustrations'] },
          {id: 10, image:'consulting_mobile.jpg', tags:['all', 'mobile_ui'] },
          {id: 11, image:'phone.png', tags:['all', 'mobile_ui'] },
          {id: 12, image:'alamy_phone.jpg', tags:['all', 'mobile_ui'] },
          {id: 13, image:'web.png', tags:['all', 'web_design'] },
        ],
        currentTag: 'all'
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
      }
    }
});
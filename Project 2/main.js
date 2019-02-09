new Vue({
    el: '#app',
    data: {
        text_eng:{
          header:{
            header_h1:"We've got the talent",
            header_text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          }
        },
        text_ru:{
          header:{
            header_h1:"У нас есть таланты",
            header_text:"Идейные соображения высшего порядка, а также постоянный количественный рост. Место обучения кадров влечет за собой процесс внедрения."
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
        ],
        currentTag: 'all'
    },
    computed:{
      filteredImages: function(){
        var filter = this.currentTag;
        return this.images.filter(function(img){
          return img.tags.indexOf(filter) !== -1;
        });
      }
    },
    methods:{
      filter: function(tag){
        this.currentTag = tag;
      }
    }
});
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
          {image:'./images/Branding.png'},
          {image:'./images/Branding_2.png'},
          {image:'./images/Mobile_UI.png'},
          {image:'./images/Web_design_2.png'},
          {image:'./images/Illustrations.png'},
          {image:'./images/Web_design.png'},
        ]
    }
});
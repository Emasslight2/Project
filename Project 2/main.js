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
              intro:"Some of our work",
              tags:{
                all:'all',
                branding:'branding',
                web_design:'web design',
                mobile_ui:'mobile ui',
                illustrations:'illustrations'
              },
              btn:"Show me more"
            },
            clients_sec:{
              intro:"Our clients"
            },
            about_us:{
              intro:"About us",
              text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa non ex consectetur interdum et vitae lacus. Cras congue massa eget dolor consequat tincidunt. Donec sit amet pulvinar felis.",
              form:{
                name:'Name',
                surname:'Surname',
                email:'Email',
                speciality:'Speciality'
              }
            },
            why_choose_us:{
              intro:"Why choose us",
              text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa non ex consectetur interdum et vitae lacus. Cras congue massa eget dolor consequat tincidunt. Donec sit amet pulvinar felis.",
            },
            get_in_touch:{
              intro:"get in touch",
              text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa non ex consectetur interdum et vitae lacus. Cras congue massa eget dolor consequat tincidunt. Donec sit amet pulvinar felis."
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
              text_inner:"Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений. Систем массового участия.",
              big_btn:"Чистый Креатив."
            },
            work_sec:{
              intro:"Некоторые из наших работ",
              tags:{
                all:'все',
                branding:'брендинг',
                web_design:'веб дизайн',
                mobile_ui:'мобильный ui',
                illustrations:'иллюстрации'
              },
              btn:"Показать больше"
            },
            clients_sec:{
              intro:"Наши клиенты"
            },
            about_us:{
              intro:"О нас",
              text:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени.",
              form:{
                name:'Имя',
                surname:'Фамилия',
                email:'Эл. почта',
                speciality:'Специальность'
              }
            },
            why_choose_us:{
              intro:"Почему мы",
              text:"Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений. Систем массового участия.",
            },
            get_in_touch:{
              intro:"Связаться с нами",
              text:"Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений. Систем массового участия."
            }
          }
        },
        ru:false,
        images:[
          {id: 1, image:'./images/Branding.png', tags:['all', 'branding'], name_eng:'branding', text_eng:"Restaurants", name_ru:'брендинг', text_ru:"Рестораны" },
          {id: 2, image:'./images/Branding_2.png', tags:['all', 'branding'], name_eng:'branding', text_eng:"Ocean's beaches", name_ru:'брендинг', text_ru:"Океанские пляжи" },
          {id: 3, image:'./images/Mobile_UI.png', tags:['all', 'mobile_ui'], name_eng:'mobile ui', text_eng:"Google Mail", name_ru:'мобильный ui', text_ru:"Google Почта" },
          {id: 4, image:'./images/Web_design_2.png', tags:['all', 'web_design'], name_eng:'web wesign', text_eng:"Portico", name_ru:'веб дизайн', text_ru:"Портико" },
          {id: 5, image:'./images/Illustrations.png', tags:['all', 'illustrations'], name_eng:'illustrations', text_eng:"SMASH bros", name_ru:'иллюстрации', text_ru:"Братья SMASH" },
          {id: 6, image:'./images/Web_design.png', tags:['all', 'web_design'], name_eng:'web wesign', text_eng:"SALT", name_ru:'веб дизайн', text_ru:"SALT" },
          {id: 7, image:'./images/Creative_b.jpg', tags:['all', 'branding'], name_eng:'branding', text_eng:"Coffee pubs", name_ru:'брендинг', text_ru:"Кофейные пабы" },
          {id: 8, image:'./images/ADK_brand.png', tags:['all', 'branding'], name_eng:'branding', text_eng:"ADK Consulting", name_ru:'брендинг', text_ru:"ADK Консалтинг" },
          {id: 9, image:'./images/Blackberry_desing.png', tags:['all', 'illustrations'], name_eng:'illustrations', text_eng:"Design Guidelines", name_ru:'иллюстрации', text_ru:"Руководство по Дизайну" },
          {id: 10, image:'./images/consulting_mobile.jpg', tags:['all', 'mobile_ui'], name_eng:'mobile ui', text_eng:"ANDER", name_ru:'мобильный ui', text_ru:"ANDER" },
          {id: 11, image:'./images/phone.png', tags:['all', 'mobile_ui'], name_eng:'mobile ui', text_eng:"boniad", name_ru:'мобильный ui', text_ru:"boniad" },
          {id: 12, image:'./images/alamy_phone.jpg', tags:['all', 'mobile_ui'], name_eng:'mobile ui', text_eng:"alamy", name_ru:'мобильный ui', text_ru:"alamy" },
          {id: 13, image:'./images/web.png', tags:['all', 'web_design'], name_eng:'web wesign', text_eng:"Envoy", name_ru:'веб дизайн', text_ru:"Envoy" },
        ],
        currentTag: 'all',
        applyVisibility:false,
        videoSource:'https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4',
        videoShow:false,
        features:[
          {id: 1, image:'./slider/smartphone.png', name_eng:'App Design', name_ru:"Дизайн Приложения", 
          text_eng:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet.",
          text_ru:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает." },
          {id: 2, image:'./slider/pad.png', name_eng:'Responsive Layout', name_ru:"Адаптивный Макет", 
          text_eng:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet.",
          text_ru:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает." },
          {id: 3, image:'./slider/laptop.png', name_eng:'Pixel Perfect Design', name_ru:"Идеальный Дизайн", 
          text_eng:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet.",
          text_ru:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает." },
          {id: 4, image:'./slider/laptop.png', name_eng:'Pixel Perfect Design', name_ru:"Идеальный Дизайн", 
          text_eng:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet.",
          text_ru:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает." },
          {id: 5, image:'./slider/pad.png', name_eng:'Responsive Layout', name_ru:"Адаптивный Макет", 
          text_eng:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet.",
          text_ru:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает." },
          {id: 6, image:'./slider/smartphone.png', name_eng:'App Design', name_ru:"Дизайн Приложения", 
          text_eng:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet massa. Lorem ipsum dolor sit amet.",
          text_ru:"Идейные соображения высшего порядка, а также постоянный количественный рост. Повседневная практика показывает." }
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
      textareaResize() {
        this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px'
      }
    },
});
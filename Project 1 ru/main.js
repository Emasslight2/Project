let app = new Vue({
    el:'#app',
    data:{
      name:'',
      sent:'Отправлено',
      showsent:false
    }
  });
  let nav = new Vue({
    el:'nav',
    data:{
      position:'fixed',
      showWords: 'СКРЫТЬ'
    },
    methods:{
      changePosition:function(){
        if(this.position=='fixed') {this.position='relative'; this.showWords='ПОКАЗАТЬ'}
        else {this.position='fixed'; this.showWords='СКРЫТЬ';}
      }
    }
  });
  let slider = new Vue({
      el: 'image-slider',
      data: {
          images: ['https://blog.galvanize.com/wp-content/uploads/2017/11/workspace-1.jpg', 'http://mediad.publicbroadcasting.net/p/wkar/files/styles/x_large/public/201809/lane-3596034_1920.jpg','https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/06/06/Pictures/_e0d17e8c-4a82-11e7-88f6-6a3facb665a5.jpg'],
          currentNumber: 0,
          timer: null,
      },
  
      mounted: function () {
          this.startRotation();
      },
  
      methods: {
          startRotation: function() {
              this.timer = setInterval(this.next, 3000);
          },
  
          stopRotation: function() {
              clearTimeout(this.timer);
              this.timer = null;
          },
  
          next: function() {
              this.currentNumber += 1
          },
          prev: function() {
              this.currentNumber -= 1
          }
      },
      
      computed: {
          currentImage: function() {
            return this.images[Math.abs(this.currentNumber) % this.images.length];
        }
      }
  });
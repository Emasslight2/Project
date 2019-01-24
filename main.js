let app = new Vue({
    el:'#app',
    data:{
      name:'',
      sent:'sent',
      showsent:false
    }
  });
  let nav = new Vue({
    el:'nav',
    data:{
      position:'fixed',
      showWords: 'UNSHOW'
    },
    methods:{
      changePosition:function(){
        if(this.position=='fixed') {this.position='relative'; this.showWords='SHOW'}
        else {this.position='fixed'; this.showWords='UNSHOW';}
      }
    }
  });
  let slider = new Vue({
      el: 'image-slider',
      data: {
          images: ['https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'http://s1.1zoom.me/big3/87/347824-admin.jpg', 'https://hdwallsource.com/img/2014/10/owl-on-tree-stump-wallpaper-43762-44841-hd-wallpapers.jpg'],
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
let header = new Vue({
    el: 'header',
    data: {
        nice:"WE've got the talent",
        niceRu:"У нас есть таланты",
        ru:true,
    }
  });
let main = new Vue({
  el: 'main',
  data:{
    images:[
      {image:'./images/Branding.png'},
      {image:'./images/Branding_2.png'},
      {image:'./images/Mobile_UI.png'},
      {image:'./images/Web_design_2.png'},
      {image:'./images/Illustrations.png'},
      {image:'./images/Web_design.png'},
    ]
  },
  computed:{
    filteredImages(image, index){
      image=this.images[index];
    }
  }
});
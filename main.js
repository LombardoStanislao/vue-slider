// Stiamo prendendo sempre più confidenza con Vue e oggi abbiamo visto come fare il carousel di immagini con Vue!
// Oggi pomeriggio rifatelo anche voi e, se vi fa piacere e ne avete il tempo, aggiungete come bonus anche l'autoplay con una timing functions.
// Piccolo consiglio: cercate nella documentazione di vue come fare per eseguire una funzione quando l'istanza di Vue è stata creata.


var app = new Vue({

  el: '#root',

  data: {

    indexImages: 0,
    images: [
      "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/07/new-york2.jpg?fit=1024%2C684&ssl=1",
      "https://multiplayer.net-cdn.it/thumbs/images/2018/09/14/cities-skylines-switch_1_jpg_800x0_crop_upscale_q85.jpg",
      "https://hbr.org/resources/images/article_assets/2016/01/04-Cities-Looking-to-Harness-Smart-Technologies-Should-Start-Small_960px-x-540px.jpg",
      "https://assets.unenvironment.org/2020-02/sustainable-cities.jpg",
      "https://graylinegroup.com/wp-content/uploads/2016/03/city-1209105_1280-1.jpg"
    ]

  },

  methods: {

    autoplay: function() {

      setInterval(() => {

        this.indexImages += 1;

          if (this.indexImages == this.images.length) {
            this.indexImages = 0;
           }

      }, 2000)
    },

    nextImages() {

      this.indexImages += 1;

        if (this.indexImages == this.images.length) {
          this.indexImages = 0;
         }

    },

    prevImages() {

      this.indexImages -= 1;

      if (this.indexImages < 0) {

        this.indexImages = this.images.length - 1;

    },

    stopAutoplay() {
        clearInterval(autoplay);
    }


// Errore di sintassi che non riesco  a capire

    // bulletClick() {
    //
    //     this.indexImages = indexCircle;
    // }



    },


// Si possono creare così le funzioni?

    // function changeNextImg() => {
    //   this.indexImages += 1;
    //
    //   if (this.indexImages == this.images.length) {
    //     this.indexImages = 0;
    //   }
    // }




  }, // Fine methods

  created:function() {
    this.autoplay();
  }



});

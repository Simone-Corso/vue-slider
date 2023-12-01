const { createApp } = Vue;

createApp({
  data() {
    return {
      activeIndex: 0,
      images : [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp',
         ],

         title: 'Marvels Spiderman Miles Morale',
         'Ratchet & Clank Rift Apart',
         'Fortnite',
         'Stray',
         'Marvel s Avengers',

         description: '"Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."'


    
    }
  },

  methods: {
    ChangesSlideTo(index){
        if(index >= this.image.length || index < 0){
            return false;
        }

        this.activeIndex = index;
    }
  },

  nextSlide(){
    this.activeIndex = this.activeIndex + 1;
    if (this.activeIndex >= this.images.lenght){
        this.activeIndex = 0;
    }
  },

  prevSlide(){
    this.ChangesSlideTo(this.activeIndex - 1)
  },
  
}).mount('#app')

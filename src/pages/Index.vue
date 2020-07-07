<template>
  <q-layout class="bg-grey-4" view="lHh Lpr Lff">
    <q-page padding>
      <div class="q-mb-xl">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          autoplay
          arrows
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide :name="1" img-src="statics/gambar1.jpg" />
          <q-carousel-slide :name="2" img-src="statics/gambar2.jpg" />
          <q-carousel-slide :name="3" img-src="statics/gambar3.jpg" />
        </q-carousel>
      </div>
      <div class="justify-center q-pa-md row items-start q-gutter-md">
        <q-card class="my-card text-black">
          <q-img
            src="../statics/body treatmen.jpg"
            :ratio="16/9"
           />
            <q-card-actions>
              <div class="text-h6">Body Treatmen</div>
              <q-space />

              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expandedBody ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expandedBody = !expandedBody"
              />
            </q-card-actions>

            <q-card-section class="q-pt-none">
              <q-slide-transition>
                <div v-show="expandedBody">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    Merupakan serangkaian perawatan badan yang meliputi massage, lulur tradisional yang dipadukan dengan yoghurt body cooling serta berendam rempah yang bermanfaat untuk merileksasikan tubuh, menghaluskan dan melembutkan kulit.
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card-section>
          </q-card>
          
      <q-card class="my-card text-black">
        <q-img
          src="../statics/hair treatmen.jpg"
          :ratio="16/9"
        />
          <q-card-actions>
            <div class="text-h6">Hair Treatmen</div>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expandedHair ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expandedHair = !expandedHair"
            />
          </q-card-actions>

          <q-card-section class="q-pt-none">
            <q-slide-transition>
              <div v-show="expandedHair">
                <q-separator />
                <q-card-section class="text-subitle2">
                  Hair treatment umumnya dilakukan untuk memulihkan kondisi rambut pasca proses styling. Berbagai macam produk yang dijual di salon Ghel's salon dapat mengatasi dan mencegah kerusakan rambut, seperti rambut kusam atau bercabang. Yang diaplikasikan oleh staff kami yang berpengalaman dan professional.
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card-section>  
        </q-card>
        <q-card class="my-card text-black">
          <q-img
            src="../statics/facial.jpg"
            :ratio="16/9"
          />
            <q-card-actions>
            <div class="text-h6">Face Treatmen</div>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expandedFace ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expandedFace = !expandedFace"
            />
          </q-card-actions>

          <q-card-section class="q-pt-none">
            <q-slide-transition>
              <div v-show="expandedFace">
                <q-separator />
                <q-card-section class="text-subitle2">
                  Facial treatment adalah perawatan kulit untuk membantu kulit bisa tampak lebih muda dan segar kembali.
                  Manfaat facial treatment yang paling terasa adalah rasa nyaman pada kulit yang bersih dan sehat,Masalah kulit gelap pun bisa diatasi dengan perawatan facial, tetapi jika perawatan yang dipilih tidak tepat justru akan berbahaya untuk kesehatan kulit. Karena itu,kami dari Ghel's salon benar benar profesional dalam melayani konsumen yang benar-benar terpercaya dan memiliki reputasi baik. Produk-produk yang kami gunakan aman dan tidak mengandung mengandung pewangi atau bahan kimia berbahaya.
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card-section> 
        </q-card>
      </div>
    </q-page>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      expandedFace: false,
      expandedHair: false,
      expandedBody: false
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

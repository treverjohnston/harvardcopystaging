<template>
  <q-page class="flex flex-center">
    <div class="row full-width header">
      <div class="col-md-6 text-black text-left left-side">
        <div v-for="service in services" class="">
          <q-btn flat align="left" v-if="service.value == highlighted" class="service highlighted text-bold full-width"
            :id="service.value">
            {{service.name}}
          </q-btn>
          <q-btn flat align="left" v-else class="service not-highlighted text-bold full-width" :id="service.value">
            {{service.name}}
          </q-btn>
        </div>
      </div>
      <div class="col-md-6 text-black text-center right-side">
        <div v-for="service in services">
          <div v-if="service.value == highlighted">
            <q-list class="row justify-center subservices">
              <q-item v-for="sub in service.subservices" class="col-md-5">
                <q-item-section>
                  <q-btn no-caps flat class="right-button text-weight-regular">
                    <h5>

                      {{sub}}
                    </h5>
                  </q-btn>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .header {
    /* background-color: rgba(0, 0, 0, 0.75); */
    height: 90vh;
  }

  .highlighted {
    text-decoration: underline;
  }

  .not-highlighted {
    opacity: .25;
  }

  .service {
    padding-left: 5rem;
    font-size: 2rem;
  }

  .left-side {
    background-color: rgba(255, 255, 255, 0.95);
  }

  .right-side {
    background-color: rgba(173, 216, 230, 0.95);
  }

  .right-button {
    font-size: 1.2rem;
  }

  .subservices {
    /* margin-top: 4rem; */
  }
</style>

<script>
  import anime from "animejs";
  export default {
    name: 'Home',
    data() {
      return {
        highlighted: 'copy',
        running: false,
        services: [
          {
            name: 'Copy Service',
            subservices: [
              'Full Services Xerox B/W Copies',
              'Color Copies'
            ],
            id: 0,
            value: 'copy'
          },
          {
            name: 'Direct Mail',
            subservices: [
              'Postal Metering',
              'Folding Direct Mail',
              'Envelope Printing',
              'Labeling and Ink-Jetting',
              'Every Door Direct Mail Printing and Bundling'
            ],
            id: 1,
            value: 'direct'
          },
          {
            name: 'Office Printing',
            subservices: [
              'Business Cards',
              'Letterhead',
              'Envelopes',
              'Brochures',
              'Flyers',
              'Menus',
              'Newsletters',
              'Postcards',
              'Price Lists',
              'Manuals',
              'Booklets',
              'NCR Multiple Part Forms and Invoices'
            ],
            id: 2,
            value: 'office'
          },
          {
            name: 'Announcements/Invitations',
            subservices: [
              'Full Services Xerox B/W Copies',
              'Color Copies'
            ],
            id: 3,
            value: 'announcements'
          },
          {
            name: 'Graphics Design',
            subservices: [
              'Full Services Xerox B/W Copies',
              'Color Copies'
            ],
            id: 4,
            value: 'graphics'
          },
          {
            name: 'Bindery',
            subservices: [
              'Full Services Xerox B/W Copies',
              'Color Copies'
            ],
            id: 5,
            value: 'bindery'
          },
        ]

      }
    },
    mounted() {
      if (!this.running) {
        this.running = true;
        // anime(
        //   {
        //     targets: '#copy',
        //     scale: {
        //       value: '1.5',
        //       duration: 2000,
        //       easing: 'easeOutQuart',
        //     }
        //   })

        // anime({
        //   targets: '#copy',
        //   opacity: [
        //     { value: [.25, 1], duration: 2000, easing: 'easeInQuad' }]
        // })

        setTimeout(() => {
          this.reloadServices(1)
        }, 4100);
      }
    },
    methods: {
      reloadServices(prevBold) {
        this.highlighted = this.services[prevBold].value;
        var target = `#${this.services[prevBold].value}`
        // var tl = anime.timeline({
        //   easing: 'easeOutQuart',
        //   duration: 750
        // })
        // tl.add({
        //   targets: target,
        //   scale: {
        //     value: '1.5',
        //     duration: 1000
        //   }
        // })
        //   .add({
        //     targets: target,
        //     scale: {
        //       value: '1',
        //       duration: 2000
        //     }
        //   }, '+=7100')

        var tl = anime.timeline({
        })
        tl.add({
          targets: target,
          opacity: [
            { value: [.25, 1], duration: 1000, easing: 'easeInQuad' }
          ]
        })
        tl.add({
          targets: target,
          opacity: [
            { value: [1, .25], duration: 2000, easing: 'easeOutQuad' }
          ]
        }, '+=7100')

        var nextBold = 0;
        if (prevBold < this.services.length - 1) {
          nextBold = prevBold + 1;
        }
        else {
          nextBold = 0;
        }
        setTimeout(() => {
          this.reloadServices(nextBold)
        }, 8100);
      }

      // reloadServices() {
      //   var currentServices = this.services;
      //   var removed = currentServices.shift();
      //   currentServices.push(removed);
      //   this.services = currentServices;

      //   anime(
      //     {
      //       targets: '.service',
      //       translateY: {
      //         value: ['10px', '0px'],
      //         duration: 4000,
      //         easing: 'easeOutBounce',
      //       },
      //       translateY: {
      //         value: ['0px', '10px'],
      //         duration: 4000,
      //       },
      //       opacity: [
      //         { value: [0, 1], duration: 4000, easing: 'easeOutQuad' }
      //       ],
      //       // delay: anime.stagger(100)
      //     }
      //   );
      //   setTimeout(this.reloadServices, 4100);
      // }
    },
    computed: {
      // services() {
      //   return this.$store.state.items.services;
      // }
    }
  }
</script>
<template>
    <q-page>
        <!-- DESKTOP -->
        <div class="row justify-center header text-center home-header desktop-only">
            <div class="col-xs-12" v-scroll-fire="fadeInImage">
                <q-carousel infinite animated arrows :autoplay="6000" v-model="slideModel" height="60vh">
                    <q-carousel-slide v-for="slide in slides" :name="slide.id" class="" :img-src="slide.src"
                        :alt="slide.name">
                        <div class="custom-caption">
                            <span class="text-h1">{{slide.title}}</span>
                        </div>
                        <div v-if="slide.id != 0" class="custom-caption">
                            <q-btn v-if="slide.title != 'Litigation Services'" size="xl" class="" rounded color="info"
                                no-caps to="/services">Learn
                                More
                            </q-btn>
                            <q-btn v-else size="xl" class="" rounded color="info" no-caps to="/litigation">Learn
                                More
                            </q-btn>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
          <!-- MOBILE -->
        <div class="row justify-center text-center mobile-only">
            <div class="col-xs-12" v-scroll-fire="fadeInImage">
                <q-carousel infinite arrows animated :autoplay="6000" v-model="slideModel" height="60vh" class="">
                    <q-carousel-slide v-for="slide in slides" :name="slide.id" class="" :img-src="slide.src"
                        :alt="slide.name">
                        <div class="custom-caption-mobile">
                            <h4 class="">{{slide.title}}</h4>
                        </div>
                        <div v-if="slide.id != 0" class="custom-caption-mobile">
                            <q-btn v-if="slide.title != 'Litigation Services'" size="md" class="" rounded color="info"
                                no-caps to="/services">
                                Learn
                                More
                            </q-btn>
                            <q-btn v-else size="md" class="" rounded color="info" no-caps to="/litigation">Learn
                                More
                            </q-btn>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
        <!-- END MOBILE -->
        <!-- SQUARES (desktop/mobile) -->
        <div class="row justify-center second-header text-center header-padding ">
            <q-card @click.native="push(card.link)" :id="card.link" v-for="card in cardServices" :class="card.class"
                v-anime="{ translateY: {value: ['100px', '-50px'], duration: 4000, }}">
                <q-card-section>
                    <div class="text-h6">{{card.name}}</div>
                </q-card-section>

                <q-separator dark />
                <q-card-section>
                    <q-icon color="white" :name="card.icon" class="icon-ind grow" />
                </q-card-section>
            </q-card>
        </div>
        <!-- END SQUARES -->
        <!-- DESKTOP -->
        <div class="row justify-center header text-center desktop-only q-gutter-md">
            <div class="col-xs-10 col-sm-9 col-md-8 text-justify white-background text-padding shadow-12 self-center home-border not-loaded"
                v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-75px'], duration: 1000},  easing: 'linear', delay:100 }">
                <div class="text-h6 text-weight-regular paragraph-ind">Harvard Print & Copy Center is a full service
                    printing and copying
                    company, with more than {{years}} years
                    hands-on experience.</div>
                <div class="text-h6 text-weight-regular paragraph-ind">
                    We design and print our customers documents, invitations, and any project at hand. We boast
                    courteous same day service,
                    prompt in house bindery and fulfillment (direct mail) as well.
                </div>
                <div class="text-h6 text-weight-regular paragraph-ind">
                    We welcome small and large orders and offer great quality print products at reasonable prices.
                    Most
                    products are
                    manufactured and shipped the same day your order is placed. Shop your order first then email us with
                    a request for quote
                    at <q-btn flat no-caps to="/contact" class="phoneNumber heading text-h6">{{email}}
                    </q-btn> or
                    call us at <a href="tel:9258559998" class="phoneNumber heading">(925)
                        855-9998</a>. When you need
                    fast, high quality printing,
                    call Harvard Print &
                    Copy Center!</div>
                <h6 class="text-center text-bold">We are excited to announce as of 2019, we
                    now have an office in Boise,
                    Idaho!
                    For fast, friendly service in the the Treasure Valley, give Harvard Print & Copy Center a call!
                </h6>
            </div>
        </div>
        <!-- MOBILE  -->      
        <div class="row justify-center second-header text-center header-padding mobile-only">
            <div class="col-xs-10 col-sm-9 col-md-8 text-justify white-background text-padding shadow-12 mobile-margin border-background"
                v-anime="{  opacity: { value: ['0', '1'], duration: 8000 }}">
                <div class="text-body2 paragraph-ind">Harvard Print & Copy Center is a full service printing and copying
                    company, with
                    more than {{years}} years
                    hands-on experience.</div>
                <div class="text-body2 paragraph-ind">
                    We design and print our customers documents, invitations, and any project at hand. We boast
                    courteous same day service,
                    prompt in house bindery and fulfillment (direct mail) as well.
                </div>
                <div class="col-xs-12 heading text-padding self-center"
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-100px', '0px'], duration: 1000},  easing: 'linear', delay:100 }">
                    <q-img src="../statics/various/bindery.jpeg" class="shadow-12" alt="stock photo" />
                </div>
                <div class="text-body2 paragraph-ind">
                    We welcome small and large orders and offer great quality print products at reasonable prices.
                    Most
                    products are
                    manufactured and shipped the same day your order is placed. Shop your order first then email us with
                    a request for quote
                    at <q-btn to="/contact" no-caps flat class="phoneNumber heading text-body2">{{email}}</q-btn> or
                    call us at <a href="tel:9258559998" class="phoneNumber heading">(925)
                        855-9998</a>. When you need
                    fast, high quality printing,
                    call Harvard Print &
                    Copy Center!</div>
                <div class="text-body2 text-center text-bold" v-scroll-fire="fadeInImage">We are excited to announce as
                    of 2019, we now have an
                    office in Boise, Idaho!
                    For fast, friendly service in the the Treasure Valley, give Harvard Print & Copy Center a call!
                </div>
            </div>
        </div>
        <!-- END MOBILE  -->

    </q-page>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                slideModel: 0,
            }
        },
        computed: {
            cardServices() {
                return this.$store.state.items.cardServices;
            },
            email() {
                return this.$store.state.state.email
            },
            slides() {
                return this.$store.state.items.slides;
            },
            years() {
                var y = new Date;
                return parseInt(y.getFullYear()) - 1995;
            }
        },
        methods: {
            push(link) {
                this.$router.push(link)
            },
            fadeInImage() {
                this.cardServices.forEach(card => {
                    var el = document.getElementById(card.link)
                    el.classList.add('loaded')
                });
            }
        }
    }
</script>

<style scoped>
</style>
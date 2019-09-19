<template>
    <q-page>
        <!-- DESKTOP -->
        <div class="row justify-center header text-center header-padding desktop-only">
            <div class="col-sm-10 col-md-12 heading text-padding">
                <h1 class="">Welcome to Harvard Print and Copy Center</h1>
            </div>
        </div>
        <div class="row justify-center second-header text-center header-padding desktop-only">
            <div class="col-xs-10 col-sm-9 col-md-8 text-justify white-background text-padding shadow-12"
                v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-125px'], duration: 1000},  easing: 'linear', delay:100 }">
                <div class="text-h6 text-weight-regular paragraph">Harvard Print & Copy Center is a full service
                    printing and copying
                    copmany, with
                    more than 20 years
                    hands-on experience.</div>
                <div class="text-h6 text-weight-regular paragraph">
                    We design and print our customers documents, invitations, and any project at hand. We boast
                    courteous same day service,
                    prompt in house bindery and fulfillment (direct mail) as well.
                </div>
                <div class="text-h6 text-weight-regular paragraph">
                    We welcome small and large orders and offer great quality print products at reasonable prices.
                    Most
                    products are
                    manufactured and shipped the same day your order is placed. Shop your order first then email us with
                    a request for quote
                    at <span class="heading">info@harvardcopy.com</span> or call us at <span class="heading">(925)
                        855-9998 </span>. When you need
                    fast, high quality printing,
                    call Harvard Print &
                    Copy Center!</div>
                <h6 class="text-center">We are excited to announce as of 2019, we now have an office in Boise, Idaho!
                    For fast, friendly service in the the Treasure Valley, give Harvard Print & Copy Center a call
                </h6>
            </div>
        </div>
        <!--  -->
        <!-- MOBILE -->
        <div class="row justify-center header text-center mobile-only">
            <div class="col-sm-10 col-md-12 heading text-padding">
                <h4 class="">Welcome to Harvard Print and Copy Center</h4>
            </div>
        </div>
        <div class="row justify-center second-header text-center header-padding mobile-only">
            <div class="col-xs-10 col-sm-9 col-md-8 text-justify white-background text-padding shadow-12 mobile-margin"
                v-anime="{  opacity: { value: ['0', '1'], duration: 8000 }}">
                <div class="text-body2 paragraph">Harvard Print & Copy Center is a full service printing and copying
                    copmany, with
                    more than 20 years
                    hands-on experience.</div>
                <div class="text-body2 paragraph">
                    We design and print our customers documents, invitations, and any project at hand. We boast
                    courteous same day service,
                    prompt in house bindery and fulfillment (direct mail) as well.
                </div>
                <div class="text-body2 paragraph">
                    We welcome small and large orders and offer great quality print products at reasonable prices.
                    Most
                    products are
                    manufactured and shipped the same day your order is placed. Shop your order first then email us with
                    a request for quote
                    at <span class="heading">info@harvardcopy.com</span> or call us at <span class="heading">(925)
                        855-9998 </span>. When you need
                    fast, high quality printing,
                    call Harvard Print &
                    Copy Center!</div>
                <div class="text-body2 text-center text-bold">We are excited to announce as of 2019, we now have an
                    office in Boise, Idaho!
                    For fast, friendly service in the the Treasure Valley, give Harvard Print & Copy Center a call
                </div>
            </div>
        </div>
        <!--  -->
        <div class="row justify-center header text-center">
            <q-card @click.native="push(card.link)" v-for="card in cardServices" :class="card.class"
                v-anime="{ translateY: {value: ['0px', '-150px'], duration: 4000, }}">
                <q-card-section>
                    <div class="text-h6">{{card.name}}</div>
                </q-card-section>

                <q-separator dark />
                <q-card-section>
                    <q-icon color="white" :name="card.icon" class="icon grow" />
                </q-card-section>
            </q-card>
        </div>
        <!-- <div class="row justify-center second-header text-center">
            <div class="col-xs-10 col-md-6">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHarvardCopy%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                    width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                    allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div> -->
    </q-page>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            cardServices() {
                return this.$store.state.items.cardServices;
            }
        },
        methods: {
            push(link) {
                this.$router.push(link)
            }
        }
    }
</script>

<style scoped>
    .icon {
        font-size: 6rem;
        margin: 2rem;
    }

    .card {
        min-height: 30vh;
        padding: 0rem 1rem;
        margin: 1rem 1rem;
    }

    .paragraph {
        padding: 1rem 0;
    }
</style>
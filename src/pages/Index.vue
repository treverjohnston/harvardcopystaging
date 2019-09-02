<template>
    <q-page padding>
        <div class="row justify-center header text-center ">
            <div class="col-sm-10 col-md-12 heading">
                <h2 class="desktop-only">Welcome to Harvard Print and Copy Center</h2>
                <h4 class="mobile-only">Welcome to Harvard Print and Copy Center</h4>
            </div>
            <div class="col-sm-11 col-md-8 text-justify"
                v-anime="{ translateY: { value:['-50px', '0px'], duration: 2000,} }">
                <div class="text-body1 paragraph">HARVARD Print & Copy CENTER is a full service printing and copying
                    place, with
                    more than 20 years
                    hands-on experience.</div>
                <div class="text-body1 paragraph">
                    We design and print our customers documents, invitations, and any project at hand. We boast
                    courteous same day service,
                    prompt in house bindery and Fulfillment (direct mail) as well.
                </div>
                <div class="text-body1 paragraph">
                    We welcome small and large orders and offer great quality print products at reasonable prices.
                    Most
                    products are
                    manufactured and shipped the same day your order is placed. Shop your order first then email us with
                    a request for quote
                    at harvardcopy@gmail.com or call us at (925) 855-9998. When you need fast, high quality printing,
                    call HARVARD Print &
                    Copy CENTER!</div>
            </div>
        </div>
        <div class="row justify-center header text-center">
            <q-card @click.native="push(card.link)" v-for="card in cardServices" :class="card.class"
                v-anime="{ translateY: {value: ['-100px', '0px'], duration: 4000, }}">
                <q-card-section>
                    <div class="text-h6">{{card.name}}</div>
                </q-card-section>

                <q-separator dark />
                <q-card-section>
                    <q-icon color="white" :name="card.icon" class="icon grow" />
                </q-card-section>
            </q-card>
        </div>
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
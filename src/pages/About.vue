<template>
    <q-page>
        <div class="row justify-center header text-center header-padding">
            <div class="col-sm-10 col-md-12 heading">
                <h1 class="desktop-only text-regular">Harvard Print and Copy Center</h1>
                <h5 text-regular class="mobile-only">Harvard Print and Copy Center</h5>
                <hr class="heading-hr">
                <h2 class="desktop-only text-bold">About</h2>
                <h4 class="mobile-only text-bold">About</h4>
            </div>
        </div>
        <!-- <div class="row justify-center header text-center">
            <div class="col-md-3 desktop-only" v-anime="{ translateY: { value: ['-20px', '0px'], duration: 2000, } }">
                <q-img src="../statics/office.png" alt="Harvard Print and Copy office" class="shadow-24"></q-img>
            </div>
        </div> -->
        <div class="row justify-center second-header">
            <div class="col-sm-10 col-md-8 text-justify text-padding shadow-12 white-background"
                v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-125px'], duration: 1000},  easing: 'linear' }">
                <h6 class="text-weight-regular desktop-only">
                    Harvard Print and Copy Center is a family owned business which provides Printing, Graphics
                    Design and Copy Services to
                    its customers. Established in May of 1995, its owner, Marc Stevens, took over the preexisting
                    business and transformed
                    it into a thriving business commensurate with today’s printing technology and Graphics
                    requirements. Harvard Print and
                    Copy Center is recognized to be a friendly establishment that caters to individuals as well as
                    corporate customers such
                    as Chevron, Bank of America, Harvard University, Pacific Bell, local schools and small
                    businesses.
                </h6>
                <h6 class="text-weight-regular desktop-only">
                    After 20 years in Danville, we moved our office to 2010 Crow Canyon Place, Suite 100 in
                    San Ramon, CA. Our new
                    location is very comfortable and allows us to be in the middle of numerous
                    businesses and close by shops
                    such as Costco and Marshalls which are catty corner from us, Starbucks, Petco and Sees Candy
                    across the street from us.
                </h6>
                <h6 class="text-weight-bold desktop-only">
                    In 2019, we opened up a new branch in Boise, Idaho. Located at 11700 W Carmichael St., Boise, In the
                    Treasure Valley,
                    please give us a call at 208-999-7994 or email us at Info@Harvardcopy.com.
                </h6>
                <h6 class="text-weight-bold desktop-only">
                    We offer FREE Delivery and Pickup. We are very competitive in our pricing, we take courtesy
                    seriously and our quality is
                    there to appreciate. The customer is always right.
                </h6>
                <div class="text-body2 text-weight-regular mobile-only">
                    Harvard Print and Copy Center is a family owned business which provides Printing, Graphics
                    Design and Copy Services to
                    its customers. Established in May of 1995, its owner, Marc Stevens, took over the preexisting
                    business and transformed
                    it into a thriving business commensurate with today’s printing technology and Graphics
                    requirements. Harvard Print and
                    Copy Center is recognized to be a friendly establishment that caters to individuals as well as
                    corporate customers such
                    as Chevron, Bank of America, Harvard University, Pacific Bell, local schools and small
                    businesses.
                </div>
                <img src="../statics/office.png" alt="Harvard Print and Copy office" width="300"
                    class="mobile-only"></img>
                <div class="text-body2 text-weight-regular mobile-only">
                    After 20 years in Danville, we moved our office to 2010 Crow Canyon Place, Suite 100 in
                    San Ramon, CA. Our new
                    location is very comfortable and allows us to be in the middle of numerous
                    businesses and close by shops
                    such as Costco and Marshalls which are catty corner from us, Starbucks, Petco and Sees Candy
                    across the street from us.
                </div>
                <div class="text-body2 text-weight-bold mobile-only">
                    In 2019, we opened up a new branch in Boise, Idaho. Located at 11700 W Carmichael St., Boise, In the
                    Treasure Valley,
                    please give us a call at 208-999-7994 or email us at Info@Harvardcopy.com.
                </div>
                <div class="text-body2 text-weight-bold mobile-only">
                    We offer FREE Delivery and Pickup. We are very competitive in our pricing, we take courtesy
                    seriously and our quality is
                    there to appreciate. The customer is always right.
                </div>
                <q-btn to="/contact" color="info" size="lg" outline rounded no-caps
                    class="quote-btn shadow-12 float-right desktop-only">
                    Request a Quote
                </q-btn>
                <q-btn to="/contact" color="info" size="md" outline rounded no-caps
                    class="quote-btn shadow-12 float-right mobile-only">
                    Request a Quote
                </q-btn>
            </div>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>
    .mobile-office {
        margin: 1rem 0;
    }
</style>
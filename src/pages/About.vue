<template>
    <q-page padding>
        <div class="row justify-center header text-center">
            <div class="col-sm-10 col-md-12 heading">
                <h2 class="desktop-only text-bold">About Harvard Print and Copy</h2>
                <h4 class="mobile-only">About Harvard Print and Copy</h4>
            </div>
        </div>
        <div class="row justify-between header text-center">
            <div class="col-md-3 desktop-only" v-anime="{ 
  translateX: {
    value:    ['-50px', '0px'],
    duration: 1000,
    easing:'easeInSine'
  }  
   }">
                <q-img src="../assets/office.png" alt="Harvard Print and Copy office" class="shadow-24"></q-img>
            </div>
            <div class="col-sm-10 col-md-8 text-justify text shadow-12" v-anime="{ 
  translateX: {
    value:    ['50px', '0px'],
     duration: 1000,
    easing:'easeInSine'
  }  
   }">
                <h6 class="text-weight-regular desktop-only">
                    HARVARD Print and Copy CENTER is a family owned business which provides Printing, Graphics
                    Design and Copy Services to
                    its customers. Established in May of 1995, its owner, Marc Stevens, took over the preexisting
                    business and transformed
                    it into a thriving business commensurate with today’s printing technology and Graphics
                    requirements. HARVARD Print and
                    Copy CENTER is recognized to be a friendly establishment that caters to individuals as well as
                    corporate customers such
                    as Chevron, Bank of America, Harvard University, Pacific Bell, local schools and small
                    businesses.
                </h6>
                <h6 class="text-weight-regular desktop-only">
                    After 20 years in Danville, we recently moved our office to 2010 Crow Canyon Place, Suite 100 in
                    San Ramon, CA. Our new
                    location pictured above is very comfortable and allows us to be in the middle of numerous
                    businesses and close by shops
                    such as Costco and Marshalls which are catty corner from us, Starbucks, Petco and Sees Candy
                    across the street from us.
                </h6>
                <p class="text-weight-regular mobile-only">
                    HARVARD Print and Copy CENTER is a family owned business which provides Printing, Graphics
                    Design and Copy Services to
                    its customers. Established in May of 1995, its owner, Marc Stevens, took over the preexisting
                    business and transformed
                    it into a thriving business commensurate with today’s printing technology and Graphics
                    requirements. HARVARD Print and
                    Copy CENTER is recognized to be a friendly establishment that caters to individuals as well as
                    corporate customers such
                    as Chevron, Bank of America, Harvard University, Pacific Bell, local schools and small
                    businesses.
                </p>
                <p class="text-weight-regular mobile-only">
                    After 20 years in Danville, we recently moved our office to 2010 Crow Canyon Place, Suite 100 in
                    San Ramon, CA. Our new
                    location pictured above is very comfortable and allows us to be in the middle of numerous
                    businesses and close by shops
                    such as Costco and Marshalls which are catty corner from us, Starbucks, Petco and Sees Candy
                    across the street from us.
                </p>
            </div>
            <div class="col-sm-10 mobile-only">
                <q-img src="../assets/office.png" alt="Harvard Print and Copy office"></q-img>
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
    .text {
        border: 1px solid black;
        padding: 1rem;
    }
</style>
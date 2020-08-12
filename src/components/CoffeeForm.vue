<template>
  <div class="w-full">
    <form>
      <h2>Contact information</h2>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Your name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="John Doe" @blur="saveLocal('name')" v-model="contact.name">
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">
              Email or Instagram
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" placeholder="hello@graybrew.io or @instagram" @blur="saveLocal('email')" v-model="contact.email">
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-social">
              Mobile number
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-social" type="text" placeholder="+32 233 234" @blur="saveLocal('social')" v-model="contact.social">
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-1/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" name="transport" @input="contact.transport = 'delivery'; saveLocal('transport')" value="delivery" v-model="contact.transport" type="radio">
            <span class="text-sm">
              Delivery
            </span>
          </label>
          <label class="md:w-1/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" name="transport" @input="contact.transport = 'pickup'; saveLocal('transport')" value="pickup" v-model="contact.transport" type="radio">
            <span class="text-sm">
              Pickup
            </span>
          </label>
        </div>
        <div :key="contact.address" v-if="contact.transport == 'delivery'">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-address">
                Delivery address
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-address" type="text" placeholder="Coffee St. 10" @blur="saveLocal('address')" v-model="contact.address">
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-address">
                Area
              </label>
            </div>
            <div class="inline-block relative w-64" style="margin-top:1px">
              <select v-model="contact.region" @change="saveLocal('region')" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="" disabled>Select your area</option>
                <optgroup label="₱100 Delivery fee">
                  <option value="manila">Taguig</option>
                  <option value="mandaluyong">Mandaluyong</option>
                  <option value="pasig">Pasig</option>
                  <option value="makati">Makati</option>
                  <option value="" disabled></option>
                </optgroup>

                <optgroup label="₱120 Delivery fee">
                  <option value="manila">Manila</option>
                  <option value="pasay">Pasay</option>
                  <option value="" disabled></option>
                </optgroup>

                <optgroup label="₱150 Delivery fee">
                  <option value="quezon city">Quezon City</option>
                  <option value="marikina">Marikina</option>
                  <option value="" disabled></option>
                </optgroup>

                <optgroup label="₱200 Delivery fee">
                  <option value="ca-ma-na-va">Ca-Ma-Na-Va</option>
                  <option value="fairview">Fairview</option>
                  <option value="novaliches">Novaliches</option>
                  <option value="" disabled></option>
                </optgroup>

                <optgroup label="₱250 Delivery fee">
                  <option value="las piñas">Las Piñas</option>
                  <option value="parañaque">Parañaque</option>
                  <option value="alabang">Alabang</option>
                </optgroup>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div :key="contact.address" v-if="contact.transport == 'pickup'" class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-address">
              Pickup spot
            </label>
          </div>
          <div class="inline-block relative w-64" style="margin-top:1px">
            <select @change="saveLocal('deliveryaddress')" v-model="contact.deliveryaddress" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="manila">Manila</option>
              <option value="makati">Makati</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div :key="contact.deliveryaddress" v-if="contact.transport == 'pickup'" class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-address">
              Address
            </label>
          </div>
          <div class="md:w-2/3 text-gray-600">
            <p v-if="contact.deliveryaddress == 'manila'">
              The Manila Residences Tower 1,<br/>
              Taft Ave, Malate, Manila
            </p>
            <p v-if="contact.deliveryaddress == 'makati'">
              Diaz-Sarmiento Drug Store &<br/>
              Gen. Marchandise, 4063 Gen. Del Pilar St.<br/>
              South Cembo, Makati City
            </p>
          </div>
        </div>
      </div>

      <h2>Your order</h2>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-bottles">
              How many bottles?
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-bottles" type="number" min="2" placeholder="2" @input="ensureNumber()" @blur="saveLocal('bottles')" v-model="contact.bottles">
          </div>
        </div>
        <div :key="nonce">
          <div v-if="contact.bottles" class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-bottles">
                Cost
              </label>
            </div>
            <div class="md:w-2/3">
              <input v-if="contact.bottles < 10" style="background:none;" class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight" id="inline-bottles" type="text" disabled v-bind:value="'₱' + ( parseInt(contact.bottles) * 170 )">
              <input v-if="contact.bottles >= 10" style="background:none;" class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight" id="inline-bottles" type="text" disabled value="Coordinated with Mr. August Serra">
            </div>
          </div>
          <div v-if="contact.transport == 'delivery'" class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-bottles">
                Delivery fee<br/>(cash on delivery)
              </label>
            </div>
            <div class="md:w-2/3">
              <input style="background:none;" class="appearance-none w-full py-2 px-4 text-gray-700 leading-tight" id="inline-bottles" type="text" disabled :value="(contact.region ? '₱' + getDeliveryFee() : '₱100 to ₱250')">
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
  form {
    margin-top:2rem;
  }
  form > div {
    margin-bottom:2rem;
  }
  label {
    padding-right:3rem;
  }
</style>

<script>

function getLocal (key, emptied) {
  try {
    return localStorage.getItem(key) || emptied || ''
  } catch(e) {
    return emptied || ''
  }
}

export default {
  name: 'CoffeeForm',
  data: () => {
    return {
      deliveryfee: {
        taguig: 100,
        mandaluyong: 100,
        pasig: 100,
        makati: 100,
        manila: 120,
        pasay: 120,
        'quezon city': 150,
        marikina: 150,
        'ca-ma-na-va': 200,
        fairview: 200,
        novaliches: 200,
        'las piñas': 250,
        'parañaque': 250,
        alabang: 250
      },
      nonce: 0,
      errorFor: {
        name: '',
        email: ''
      }
    }
  },
  filters: {
    cost (val) {
      return parseInt(val) * 170
    },
    volume (val) {
      return parseInt(val) * 250
    }
  },
  computed: {
    contact: () => {
      return {
        name: getLocal('name'),
        email: getLocal('email'),
        address: getLocal('address'),
        deliveryaddress: getLocal('deliveryaddress') || 'manila',
        social: getLocal('social'),
        transport: getLocal('transport') || 'delivery',
        bottles: getLocal('bottles') || 2,
        region: getLocal('region')
      }
    } 
  },
  methods: {
    getDeliveryFee () {
      console.log(this.deliveryfee, this.contact.region)
      return this.deliveryfee[this.contact.region]
      return 200
    },
    ensureNumber () {
      if (!this.contact.bottles) this.contact.bottles = 2
      this.nonce++;
    },
    saveLocal (key) {
      localStorage.setItem(key, this.contact[key])
      this.nonce++;
    }
  }
}
</script>
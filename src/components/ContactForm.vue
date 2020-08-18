<template>
  <div class="flex-1" :class="{loading: sendingEmail}">
    <form ref="contactForm" @submit.prevent="sendEmail()" method="POST" class="bg-gray-100 shadow-md rounded px-8 md:ml-24 mt-12 md:mt-0 pt-6 pb-8 mb-4">
        <div class="confirmation px-8 md:mx-16 mt-12 md:mt-0 pt-6 pb-8 mb-4">
          <h2>Thanks for your message!</h2>
          <p>You will receive an answer shortly on <b>{{contact.email}}</b></p>
          <p>Now would be a perfect time to <a target="_blank" href="https://www.linkedin.com/in/dappjump/">connect on LinkedIn</a></p>
          <p>
            Typo? <a class="cursor-pointer" @click="sendingEmail = false;">Click here</a> to redo
          </p>
        </div>
        <h2 class="font-thin">Let's get in touch!</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Your email*
          </label>
          <input :class="{'border-red-500': (errfor.email)}" v-model="contact.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="_replyto" required placeholder="name@company.io">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
            Your message
          </label>
          <textarea name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="message" v-model="contact.message" required placeholder="You are the perfect fit! Come work with us."></textarea>
        </div>
        <div class="flex items-center justify-between">
          <input class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="send">
          </input>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="mailto:tobias@andersen.work">
            tobias@andersen.work
          </a>
        </div>
      </form> 
  </div>
</template>

<style scoped>
  form  > *{
    transition:all .2s ease-in-out;
  }

  textarea {
    max-height: 6rem;
    min-height: 6rem;
  }
  
  .loading form > * {
    pointer-events: none;
    transform:translate(-50%, -50%) scale(0.25);
    opacity:0;
  }

  form {
    position:relative;
    overflow:hidden; 
  }

  .confirmation {
    position:absolute;
    left:50%;
    top:50%;
    transition: all .2s ease-in-out;
    margin:0;
    width:100%;
    opacity:0;
    max-height:0;
    overflow:hidden;
  }

  .confirmation a {
    font-weight:600;
    text-decoration:underline;
  }

  .loading .confirmation {
    transform:translate(-50%,-50%) scale(1);
    opacity:1;
    pointer-events:all;
    max-height:100%;
    overflow:visible;
  }
</style>

<script>

  import axios from 'axios'

  export default {
    name: 'ContactForm',
    data () {
    return {
      sendingEmail: false,
      contact: {
        email: '',
        message: ''
      },
      errfor: {
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendEmail () {
      if(this.sendingEmail == false) {
        axios.post('https://service-bin-73a8.hostman.site/emailOwner', {
            email: this.contact.email,
            message: this.contact.message
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      this.contact.message = ''
      this.sendingEmail = true
    }
  },
    filters: {},
    computed: {},
    created () {}
  }
</script>
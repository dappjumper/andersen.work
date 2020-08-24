<template>
  <div class="flex-1">
    <form ref="contactForm" @submit.prevent="sendEmail()" method="POST" :class="{nobg: contactState == 'sending'}" class="animform bg-gray-100 shadow-md rounded px-8 md:ml-24 mt-12 md:mt-0 pt-6 pb-8 mb-4">
        <div class="px-8 md:mx-16 mt-12 md:mt-0 pt-6 pb-8 mb-4" :class="{activeState: contactState == 'initial'}">
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
        </div>
        <div :class="{activeState: contactState == 'sending'}">
          <div class="loader bg-gray-00 px-8 md:mx-16 mt-12 md:mt-0 pt-6 pb-8 mb-4">
            <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
                    <circle cx="22" cy="22" r="6" stroke-opacity="0">
                        <animate attributeName="r"
                             begin="1.5s" dur="3s"
                             values="6;22"
                             calcMode="linear"
                             repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                             begin="1.5s" dur="3s"
                             values="1;0" calcMode="linear"
                             repeatCount="indefinite" />
                        <animate attributeName="stroke-width"
                             begin="1.5s" dur="3s"
                             values="2;0" calcMode="linear"
                             repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="22" r="6" stroke-opacity="0">
                        <animate attributeName="r"
                             begin="3s" dur="3s"
                             values="6;22"
                             calcMode="linear"
                             repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                             begin="3s" dur="3s"
                             values="1;0" calcMode="linear"
                             repeatCount="indefinite" />
                        <animate attributeName="stroke-width"
                             begin="3s" dur="3s"
                             values="2;0" calcMode="linear"
                             repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="22" r="8">
                        <animate attributeName="r"
                             begin="0s" dur="1.5s"
                             values="6;1;2;3;4;5;6"
                             calcMode="linear"
                             repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
          </div>
        </div>
        <div :class="{activeState: contactState == 'success'}">
          <div class="px-8 md:mx-16 mt-12 md:mt-0 pt-6 pb-8 mb-4">
            <h2>Thanks for your message!</h2>
            <p>You will receive an answer shortly on <b>{{contact.email}}</b></p>
            <p>Now would be a perfect time to <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dappjump/">connect on LinkedIn</a></p>
            <p>
              Typo? <a class="cursor-pointer" @click="contactState = 'initial'">Click here</a> to redo
            </p>
          </div>
        </div>
      </form> 
  </div>
</template>

<style scoped>
  form svg {transform:scale(5,5);transform-origin:center;}
  .nobg form, .nobg {
    transition: all .2s ease-in-out;
    background:none;
    outline:none;
    border:none;
    box-shadow:none;
  }
  form {
    transition:all .2s;
  }
  form svg {
    margin: 0 auto;
  }
  form  > *{
    transition:all .2s ease-in-out;
  }

  form {
    position:relative;
    height:400px;
  }

  form > div {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) scale(0,0);
    opacity:0;
    pointer-events:none;
    width:100%;
    margin-left:0;
    margin-top:0rem;
  }

  form > div > div {
    margin-left:0;
  }

  form > div.activeState {
    opacity:1;
    transform:translate(-50%,-50%) scale(1,1);
    pointer-events:all;
  }

  textarea {
    max-height: 6rem;
    min-height: 6rem;
  }

  form {
    position:relative;
  }

  form a {
    font-weight:600;
    text-decoration:underline;
  }
</style>

<script>

  import axios from 'axios'

  export default {
    name: 'ContactForm',
    data () {
    return {
      contactState: 'initial',
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
      if(this.contactState !== 'initial') return false
      this.contactState = 'sending'
      axios.post('https://service-bin-73a8.hostman.site/emailOwner', {
          email: this.contact.email,
          message: this.contact.message
        })
        .then((response) => {
          this.contact.message = ''
          this.contactState = 'success'
        })
        .catch((error) => {
          console.log('retrying')
          setTimeout(()=>{
            this.contactState = 'initial'
            this.sendEmail()
          }, 100)
        });
    }
  },
    filters: {},
    computed: {},
    created () {}
  }
</script>
<template>
  <div id="app">
      <tabs>
          <tab name="My Pictures" :selected="true">This is the pictures page. I hope you will like my pictures</tab>
          <tab name="Music">This is the Music page</tab>
          <tab name="Videos">This is the Videos page</tab>
          <tab name="Documents">This is the Documents page. I hope you will like it</tab>
          <modal v-if="showModal" @close="showModal = false">
              <p>We insert another text here.</p>
          </modal>
          <button @click="showModal= true">Show Modal</button>
          <message title="Hello World" body="Lorem ipsum dolor sit amet this is so nice"></message>
          <message title="Welcome to messages" body="This is another message"></message>
      </tabs>
  </div>
</template>

<script>

//    import Message from './components/Message.vue';
//    import Counter from './components/Counter.vue';
    import Tabs from './components/Tabs.vue';
    import Tab from './components/Tab.vue';
    import Modal from './components/Modal.vue';
    import Message from './components/Message.vue';


    export default {
      name: 'app',
      components: { Tabs, Tab, Modal, Message },

        data(){
            return {
                showModal: false
            }
        }



    }
</script>


<style>
    /*@import "../node_modules/bulma/css/bulma.css";*/
</style>

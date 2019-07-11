<template>
  <div >

    <h1>{{ title }}</h1>

    <ul>

      <transition-group name="list" enter-active-class="animated bounceInUp"  leave-active-class="animated bounceOutDown">
        <li v-for="(avenger, index) in avengers" :key="index">{{avenger}}
          <button v-on:click="remove(index)">Remove</button>
        </li>
      </transition-group>
      <li v-if="isTyping">{{typing}}</li>

    </ul>

    <p class="count"> You have {{avengers.length}} avengers on your list </p>

    <form v-on:submit.prevent="addAvenger" >

      <input @focus="isTyping=true" @blur="isTyping=false" type="text" placeholder="Add an avenger" v-model="avenger" v-validate="'min:5|required'" name='avenger-input'>
      
      <transition name="alert-in" enter-active-class="animated flipInX"  leave-active-class="animated flipOutX">
        <P class="alert" v-if="errors.has('avenger-input')">{{errors.first('avenger-input')}}</p>
      </transition>

    </form>

  </div>
</template>

<script>
var avengersList = JSON.parse(localStorage.getItem('avengers'))? JSON.parse(localStorage.getItem('avengers')) : [];
export default {
  name: 'Avengers',
  props: {
    title: String
  },
  data() {
    return {
      avengers: avengersList,//JSON.parse(localStorage.getItem('avengers')),//[ 'Thor', 'Hulk', 'black Widow', 'Iron Man'],
      avenger:'',
      typing: 'typing....',
      isTyping: false

    }
  },
  methods: {
    addAvenger() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.avengers.push(this.avenger);
          localStorage.setItem('avengers', JSON.stringify(this.avengers));
          this.avenger = '';
          this.isTyping = false;
        }
      })
    },
    remove(index) {
      this.avengers.splice(index,1);
      localStorage.setItem('avengers', JSON.stringify(this.avengers));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
p.count{
  background-color: black;
  padding: 10px;
  opacity: 0.8;
}
li {
  display: block;
  margin: 0 10px;
  width:100%;
  margin: auto auto;
  text-align:left;
  margin-bottom: 2px;
  padding: 10px 20px;
  background-color: rgba(0,0,0, 0.5);
  border-left: 5px solid red;
  position: relative;
}
form{
  text-align: center;
}
.alert{
  text-align: left;
  position: relative;
  top: -20px;
  color: red;
  background-color: black;
  width:50%;
  padding: 5px 30px;
  font-size: 0.8rem;
}
input{
  width: 70%;
  height: 30px;
  padding: 10px 30px;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  caret-color: red;
  background-color: rgba(161, 12, 12, 0.6 );
  color: white;
  font-size: 1.4rem;
}
button{
  position: absolute;
  top:0;
  right: 3px;
  display:block;
  width:10%;
  padding: 5px;
  background-color: rgba(161, 12, 12, 1 );
  border: 1px solid rgba(161, 12, 12, 0);
  color: white;
  cursor:pointer;
  margin: 10px auto;
}
a {
  color: #42b983;
}
.alert-in-enter-active{
  animation: bounce-in .5s;
}
.alert-in-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform : scale(0);
  }
  50% {
    transform : scale(1.5);
  }
  100% {
    transform : scale(1);
  }
}
</style>

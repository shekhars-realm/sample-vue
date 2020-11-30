<template>
  <router-view/>
</template>

<style>

body{
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #615f5f;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container{
  display: flex;
  justify-content: space-around;
  height: 400px;
}
.container-center{
  display: flex;
  justify-content: center;
}
input{
  margin: 15px;
  width: 120px;
}
.round-box{
  width: 50%;
  height: 300px;
  margin: auto;
  margin-top: 20px;
  padding: 30px;
  border: 2px solid gray;
  border-radius: 10%;
}
.blue-background{
  background-color: #0091eb;
  color: white;
}
button{
  width: 90px;
  margin: 25px;
}
#nav-button{
  width: 25px;
}

</style>

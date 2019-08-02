<template>
  <div class="container">
    <div>
      <h1 class="subtitle">Insertar</h1>
      <form @submit.prevent="addGin" method="POST">
        <p>
          <label for="title" class="input-label">Title:</label>
          <input id="title" v-model="UserData.title" type="text" name="title" class="input" />
        </p>
        <p>
          <label for="content" class="input-label">Content:</label>
          <input id="content" v-model="UserData.content" type="text" name="content" class="input" />
        </p>
        <p>
          <label for="author" class="input-label">Author:</label>
          <input id="author" v-model="UserData.author" type="text" name="author" class="input" />
        </p>
        <p>
          <button type="submit" value="Submit" class="button">Insert</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      UserData: {
        title: '',
        content: '',
        author: ''
      },
      errors: []
    }
  },
  methods: {
    addGin () {
      axios.post('http://20bdc5e3.ngrok.io/insert', this.UserData)
        .then((Response) => {})
        .catch((err) => {
          this.errors.push(err)
        })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

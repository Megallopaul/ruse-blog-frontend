<template>
  <div>
    <h1>Me contacter</h1>
    <form>
      <div>
        <label for="email">Email :</label>
        <input id="email" type="email" required>
      </div>
      <div>
        <label for="message">Message :</label>
        <input id="message" type="text" required>
      </div>
      <input type="submit" value="Envoyer">
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactPage'
}
</script>

<template>
  <div class="Crypto">
    <main>
      <h1 id="theme">Finance</h1>
      <div class="main">
        <article>
          <h1>Cryptomonnaies</h1>
          <h2>Top 10 des cryptomonnaies dominantes</h2>
          <p
            v-if="error"
            class="error"
          >
            {{ error }}
          </p>
          <div class="ranktable">
            <table class="styled-table">
              <thead>
                  <tr>
                      <th>Fav</th>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  <tr
                    v-for="crypto in cryptomonnaies"
                    :key="crypto"
                  >
                    <td>
                      <div class="not-fav"
                        v-if="!favorites.includes(crypto)"
                        @click="addToFavorites(crypto)"
                      >
                        <i class="far fa-star"></i>
                      </div>
                      <div class="fav"
                        v-if="favorites.includes(crypto)"
                        @click="removeFromFavorites(crypto)"
                      >
                        <i class="fas fa-star"></i>
                      </div>
                    </td>
                    <td>{{cryptomonnaies.indexOf(crypto) + 1}}</td>
                    <td>{{crypto.name}}</td>
                    <td>$ {{crypto.price}}</td>
                  </tr>
              </tbody>
            </table>
          </div>
          <p><i>* Valeurs obtenu à partir de l'API de <a href="https://coinmarketcap.com/fr/" target="_blank">Coin Market Cap</a></i></p>
        </article>
      </div>
    </main>
  <foot></foot>
  </div>
</template>

<script>
import Foot from '../components/foot.vue'
export default {
  name: 'Crypto',

  data () {
    return {
      cryptomonnaies: [],
      error: '',
      favorites: []
    }
  },

  mounted () {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const token = localStorage.getItem('token')
    fetch('/api/v1/currencies/top10', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => { this.cryptomonnaies = data.currencies })
      .catch(error => { this.error = error })
  },

  methods: {
    addToFavorites (slug) {
      this.favorites.push(slug)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    removeFromFavorites (slug) {
      this.favorites = this.favorites.filter(favSlug => favSlug !== slug)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  },

  components: {
    foot: Foot
  }
}
</script>

<style scoped>
.ranktable {
  display: flex;
  justify-content: center;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.fav {
  color: #009879;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(odd) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #e0e0e0;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
</style>

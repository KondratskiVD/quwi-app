<template>
  <section id="content">
    <section class="container">
      <div class="user-login">
        <form
          id="login-form" class="b-box">
          <a href="/" class="c-quwi-logo">
            <img width="40px" height="40px" src="~/assets/images/quwi-logo.png">
            <div class="e-logo-text">QUWI</div>
          </a>
          <div class="c-active-input m-skin-guest">
            <div class="b-input-group">
              <div class="b-input">
                <div class="e-placeholder m-top-text" :style="styleLabel.email">
                  Email
                </div>
                <input v-model="login.email" placeholder="Email" type="text" required></div>
            </div>
          </div>
          <div class="c-active-input m-skin-guest">
            <div class="b-input-group">
              <div class="b-input">
                <div class="e-placeholder m-top-text" :style="styleLabel.password">
                  Password
                </div>
                <input v-model="login.password" type="password" placeholder="Password" required></div>
            </div>
          </div>
          <div class="b-button">
            <div class="btn" style="width: 358px;" @click="userLogin">
              <span v-if="!spinnerOn" class="e-text">Login</span>
              <Spinner v-else/>
              <button type="button" style="display: none;"></button>
            </div>
            <a href="#" class="">Forgot password?</a>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import Spinner from "../../components/Spinner";
import Loader from "../../components/Loader";

export default {
  layout: 'auth',
  auth: false,
  components: {
    Spinner
  },
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      spinnerOn: false
    }
  },
  computed: {
    styleLabel() {
      const styleLabel = {}
      for (const key in this.login) {
        styleLabel[key] = {'display': this.login[key] ? 'block' : 'none' }
      }
      return styleLabel
    }
  },
  methods: {
    userLogin() {
        this.spinnerOn = true
        this.$store.dispatch('user/LOG_IN', this.login)
        .then(() => {
          this.spinnerOn = false
        })
        .catch((e) => {
          this.$toast.error(e)
        })
    },
  }
}
</script>

<style scoped>
#content {
  min-height: 100%;
  height: auto;
  background: url(assets/images/gray_blur.png);
}

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.user-login {
  width: 440px;
  margin: auto;
  text-align: center;
}
.user-login .b-box {
  padding: 25px 40px 35px;
  background: #fff;
  border: 1px solid rgba(0,0,0,.11);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
a.c-quwi-logo img {
  margin-right: 14px;
}
a.c-quwi-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
  color: #000;
  text-decoration: none;
}
a.c-quwi-logo>.e-logo-text {
  font-family: Arial,sans-serif;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
}
.user-login .b-box .c-active-input {
  margin-bottom: 12px;
}
.c-active-input .b-input-group .b-input {
  position: relative;
  width: 100%;
}
.c-active-input.m-skin-guest .b-input-group .b-input .m-top-text.e-placeholder {
  color: #999;
}
.c-active-input.m-skin-guest .b-input-group .b-input input, .c-active-input.m-skin-guest .b-input-group .b-input textarea {
  border: 1px solid #dadada;
  border-radius: 5px;
}
.c-active-input.m-skin-guest .b-input-group .b-input .m-top-text.e-placeholder {
  color: #999;
}
.c-active-input .b-input-group .b-input .m-top-text.e-placeholder {
  color: #4b84da;
}
.c-active-input .b-input-group .b-input .m-top-text {
  margin: 0 10px;
  max-width: calc(100% - 20px);
  position: absolute;
  top: -.55em;
  background: #fff;
  display: block;
  float: left;
  padding: 0 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.user-login .b-box input[type=""], .user-login .b-box input[type=password], .user-login .b-box input[type=text] {
  border: 1px solid #4b84da;
  border-radius: 5px;
  padding: 15px;
  width: calc(100% - 35px);
  outline: none;
}
.user-login .b-button .btn {
  margin-bottom: 20px;
}
.user-login .b-box .btn {
  background: #2668c1;
  height: 52px;
  width: 100%!important;
  text-transform: none;
  text-shadow: none;
  font-size: 18px;
  border-radius: 9px;
  font-weight: 400;
  margin-top: 17px;
}
.user-login .b-box a:not(.c-quwi-logo) {
  color: #2975dc!important;
}

input:valid {
  background-color: rgb(232, 240, 254) !important;
}
</style>

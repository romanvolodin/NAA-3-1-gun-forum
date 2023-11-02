<script>
import { mapStores, setMapStoreSuffix } from 'pinia'
import { useFakeBrowserStore } from '@/stores/fake-browser'

setMapStoreSuffix('')
const elem = document.documentElement;

export default {
  computed: {
    ...mapStores(useFakeBrowserStore),
  },
  data() {
    return {
      topic: {
        title: "КУПИ ПУШКУ ВО ИМЯ ДОБРА!",
        created_at: "24.05.2023, 14:34",
      },
      author: {
        name: "ПушкиДобра",
        joined: "24.05.2023, 14:07",
        avatar: "/avatars/unicorn_v02.png"
      },
      answers: [
        // {
        //   user: "Anonymous",
        //   avatar: "/avatars/Anonymous__forum_avatar__illustration__logo__d7fcb50a_e17b_4d76_ab5f_d_S1404305585_St25_G7.5.jpeg",
        //   comment: "Ничоси!)) Поглядим как пойдет)))))))",
        //   created_at: "24.05.2023, 15:01",
        //   bid: 0,
        // },
        // {
        //   user: "Anonymous",
        //   avatar: "/avatars/Anonymous__forum_avatar__illustration__logo__d7fcb50a_e17b_4d76_ab5f_d_S1404305585_St25_G7.5.jpeg",
        //   comment: "",
        //   created_at: "24.05.2023, 19:45",
        //   bid: 0.068589,
        // },
      ],
      timer: null,
      startTime: new Date(0, 0, 0, 12, 0, 1, 0),
    }
  },
  methods: {
    openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    },
    startTimer() {
      setInterval(() => {
        let hours = this.startTime.getHours();
        let minutes = this.startTime.getMinutes();
        let seconds = this.startTime.getSeconds();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        this.timer = hours + ":" + minutes + ":" + seconds;
        this.startTime.setSeconds(this.startTime.getSeconds() - 1);
      }, 1000)
    },
  },
  mounted() {
    this.startTimer()
  },
}
</script>

<template>
  <div class="container">

    <div class="row g-0">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Darktion</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Инфо</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Полезности
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Поиск по форуму" aria-label="Search">
              <button class="btn btn-warning" @click.prevent="openFullscreen()" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

    <div class="row g-0">
      <span>
        <img style="width: 16px; height: 16px; margin-top:-2px; margin-right: 3px;" src="/icons/list.svg" alt="">
        Быстрый переход
        <img style="width: 16px; height: 16px; margin-top:-2px; margin-right: 3px; margin-left: 10px;"
          src="/icons/info-circle-fill.svg" alt="">
        FAQ
      </span>
      <hr class="m-0">
      <nav
        style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
        aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Форумы</li>
          <li class="breadcrumb-item active" aria-current="page">Оружие</li>
          <li class="breadcrumb-item active" aria-current="page">Куплю-продам</li>
          <li class="breadcrumb-item active" aria-current="page">Аукционы</li>
        </ol>
      </nav>
    </div>

    <div class="row g-0">
      <div class="col mb-3">
        <h1>{{ topic.title }}</h1>
        <button class="btn btn-warning btn-sm me-1">Ответ на пост</button>
        <button class="btn btn-warning btn-sm">Управление темой</button>
      </div>
    </div>

    <div class="row g-0 bg-secondary-subtle rounded mb-2">
      <div class="col-10 p-3">
        <h4>{{ topic.title }}</h4>
        <p>Post by {{ author.name }} » {{ topic.created_at }}</p>
        <img style="width: 90%;" src="/113_AK_v02.jpg" alt="">
        <h1 style="color: red">Торопись!! Аукцион закончится через {{ timer }}!</h1>
        <h1>Продам автоматы АК! Вещь на века!<br>113 штук в наличии.</h1>
        <h5>
          Оплата только криптой, другие варианты не предлагать<br>
          Контакты для связи в личку
        </h5>
        <p class="start-price">Стартовая цена:<br><span class="start-price-counter">0.067757 ETH</span></p>
      </div>
      <div class="col-2 border-dark-subtle rounded">
        <img class="avatar mt-2" :src="author.avatar">
        <dt>{{ author.name }}</dt>
        <dd>Posts: 1</dd>
        <dd>Joined: {{ author.joined }}</dd>
        <dd>Location: Not set</dd>
        <dd>Contact <img style="width: 14px; height: 14px; margin-top: -4px;" src="/icons/chat-dots.svg" alt=""></dd>
      </div>
    </div>

    <div v-for="answer in answers" :key="answer" class="row g-0 bg-secondary-subtle rounded mb-2">
      <div class="col-10 p-3">
        <h4>Re: {{ topic.title }}</h4>
        <p>Post by {{ answer.user }} » {{ topic.created_at }}</p>
        <span v-if="answer.comment">{{ answer.comment }}</span>
        <p v-if="answer.bid" class="start-price">Новая ставка:<br><span class="start-price-counter">{{ answer.bid }}
            ETH</span>
        </p>
      </div>
      <div class="col-2 border-dark-subtle rounded">
        <img class="avatar mt-2" :src="answer.avatar">
        <dt>{{ answer.user }}</dt>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 150px;
  height: 150px;

  @media screen and (max-width: 992px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
}

dd {
  font-size: 12px;
  margin-bottom: -4px;
  // line-height: 0.5em;
}

.start-price {
  color: var(--primary-red-dark);
  font-size: 20px;
  line-height: 1.5em;
}

.start-price-counter {
  font-size: 40px;
  font-weight: bold;
}
</style>
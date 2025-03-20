<template>
  <div class="wrapper">
    <p>Strona w budowie</p>
    <div class="waviy">
      <span style="--i: 1">3</span>
      <span style="--i: 2">0</span>
      <span style="--i: 3">.</span>
      <span style="--i: 4">0</span>
      <span style="--i: 5">8</span>
      <span style="--i: 6">.</span>
      <span style="--i: 7">2</span>
      <span style="--i: 8">0</span>
      <span style="--i: 9">2</span>
      <span style="--i: 10">5</span>
    </div>
    <p>Zapraszamy do odwiedzenia nas wkrótce!</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  width: 100%;
  color: #fff;
  font-size: 22px;
  background-color: #0e0e0e;
  text-align: center;
}

.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(0.2s * var(--i));
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
</style>

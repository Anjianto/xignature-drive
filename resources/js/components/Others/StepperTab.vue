<template>
  <div class="container">
    <slot name="head" :props="{ progress }"></slot>
    <div ref="stepWrapper" class="stepper-wrapper">
      <div ref="progress" class="progress"></div>
      <div
        v-for="(x, k) in steps"
        :class="[
          'screen-indicator',
          {
            completed: x <= progress,
          },
        ]"
        :style="{
          transitionDelay: x <= progress ? `0ms` : `${x * 100}ms`,
        }"
        :key="k"
      >
        <slot :props="{ x }" name="indicator">
          {{ x }}
        </slot>
      </div>
    </div>
    <slot :props="{ progress }"></slot>
    <div class="actions">
      <slot
        :action="{ next: next, previous: previous, progress }"
        name="action"
      >
        <button class="control-btn" @onclick="previous" :disabled="prevBtn">
          Back
        </button>
        <button class="control-btn" @onclick="next" :disabled="nextBtn">
          Continue
        </button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      progress: 0,
      prevBtn: false,
      nextBtn: true,
    };
  },
  methods: {
    previous() {
      if (this.prevBtn === false) return;
      --this.progress;
      const width = (this.progress / (this.steps.length - 1)) * 100;

      if (0 <= width && width <= 100) {
        this.$refs.progress.style.width = `${width}%`;
      }

      this.disableControls();
    },
    goTo(progress) {
      this.progress = progress;
      this.disableControls();
    },
    next() {
      if (this.nextBtn === false) {
        return;
      }
      ++this.progress;
      const width = (this.progress / (this.steps.length - 1)) * 100;
      if (0 <= width && width <= 100) {
        this.$refs.progress.style.width = `${width}%`;
      }
      this.disableControls();
    },

    disableControls() {
      if (this.progress <= 0) {
        this.prevBtn = false;
      } else if (this.progress >= this.steps.length) {
        this.$emit("finish");
        this.nextBtn = false;
      } else {
        this.prevBtn = true;
        this.nextBtn = true;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  text-align: center;
}

.actions {
  margin: 50px auto;
}
.stepper-wrapper {
  margin-bottom: 50px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.stepper-wrapper::before {
  content: "";
  width: 100%;
  height: 3px;
  background-color: lightgray;
  position: absolute;
  z-index: 0;
}

.progress {
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgb(78, 196, 243);
  position: absolute;
  z-index: 0;
  transition: width 1s;
}

.screen-indicator {
  border-radius: 50%;
  border: 3px solid lightgrey;
  align-items: center;
  background-color: white;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: gray;
  transition: border-color color;
  transition-duration: 0.7s;
}

.completed {
  border-color: rgb(78, 196, 243);
  color: rgb(78, 196, 243);
}

.control-btn {
  background-color: rgb(238, 238, 238);
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
}

.control-btn:disabled {
  cursor: not-allowed;
}

.control-btn:not(:disabled):hover {
  background-color: lightgray;
}
</style>

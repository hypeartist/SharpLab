import Vue from 'vue';

Vue.component('app-select', {
    props: {
        value: null
    },

    data() {
        return { innerValue: this.value };
    },

    watch: {
        value() {
            this.innerValue = this.value;
        },

        innerValue() {
            this.$emit('input', this.innerValue);
        }
    },

    template: `<div class="select-wrapper">
      <select v-model="innerValue">
        <slot></slot>
      </select>
    </div>`.replace(/[\r\n]+\s*/g, '').replace(/\s{2,}/g, ' ')
});
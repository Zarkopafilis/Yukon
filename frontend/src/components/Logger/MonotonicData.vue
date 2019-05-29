<!--
 * Copyright (C) 2019 UAVCAN Development Team  <uavcan.org>
 * This software is distributed under the terms of the MIT License.
 *
 * Author: Theodoros Ntakouris <zarkopafilis@gmail.com>
 -->

<template>
  <td>{{ time }}</td>
</template>

<script>
export default {
  name: 'MonotonicData',
  props: ['time', 'index'],
  methods: {
    monotonicColor (index) { // hsl(0, 0%, 0~40%)
      // const prevIndex = index - 1

      // if (this.frames.length < prevIndex || prevIndex < 0) {
      //   return 0
      // }

      // const diff = this.frames[index].monotonic - this.frames[prevIndex].monotonic

      // const scaleFactor = 1
      // return ((diff / scaleFactor) % 1) * 40
    }
  }
}
</script>

<style>
</style>

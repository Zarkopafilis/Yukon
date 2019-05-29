<!--
 * Copyright (C) 2019 UAVCAN Development Team  <uavcan.org>
 * This software is distributed under the terms of the MIT License.
 *
 * Author: Theodoros Ntakouris <zarkopafilis@gmail.com>
 -->

<template>
  <td>{{ header }}</td>
</template>

<script>
export default {
  name: 'CANTransportHeaderData',
  props: ['header'],
  methods: {
    canIdColor (id) { // hsl(298, 87%, 0~40%)
      const maxCanId = 255

      return (id / maxCanId) * 40
    }
  }
}
</script>

<style>
</style>

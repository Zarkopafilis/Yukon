<!--
 * Copyright (C) 2019 UAVCAN Development Team  <uavcan.org>
 * This software is distributed under the terms of the MIT License.
 *
 * Author: Theodoros Ntakouris <zarkopafilis@gmail.com>
 -->

<template>
  <td :class="`${priority}-bg`"><p :class="priority">{{ priority }}</p></td>
</template>

<script>
export default {
  name: 'PriorityData',
  props: ['priority']
}
</script>

<style>
</style>

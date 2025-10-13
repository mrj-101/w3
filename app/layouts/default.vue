<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

let open = ref(false)
const colorMode = useColorMode();
colorMode.preference = 'light';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      icon: 'lets-icons:home-duotone',
      to: '/',
      cick() {
        open.value = false;
      }
    },
    {
      label: 'ข้อมูลพื้นฐาน',
      icon: 'iconoir:presentation',
      children: [
        {
          label: 'เกี่ยวกับสถานศึกษา',
          icon: 'hugeicons:school',
          description: 'ประวัติ วิสัยทัศน์ พันธกิจ',
          to: '/base/rvc',
        },
        {
          label: 'ผู้บริหารสถานศึกษา',
          icon: 'hugeicons:manager',
          description: 'ผู้บริหารสถานศึกษา, ทำเนียบผู้บริหาร',
          to: '/base/administrator'
        },
        {
          label: 'คณะกรรมการบริหารวิทยาลัย',
          icon: 'hugeicons:user-group-02',
          description: 'คณะกรรมการบริหารวิทยาลัย, ชมรมผู้ปกครอง',
          to: '/base/board'
        },
        {
          label: 'คณะกรรมการบริหารสถานศึกษา',
          icon: 'iconoir:community',
          description: 'คณะกรรมการบริหารสถานศึกษา, การแบ่งส่วนราชการภายใน',
          to: '/base/board-rvc'
        },
        {
          label: 'โครงสร้างการบริหาร',
          icon: 'hugeicons:maps-global-01',
          description: 'โครงสร้างการบริหาร การแบ่งส่วนงานภายใน',
          to: '/base/org_chart'
        },
        {
          label: 'การติดต่อ',
          icon: 'hugeicons:maps-global-01',
          description: 'แผนที่ โทรศัพท์ โทรสาร อีเมล',
          to: '/base/contact'
        }
      ]
    },
    {
      label: 'ข้อมูลหลักสูตร',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'ระดับ ปวช.',
          icon: 'hugeicons:book-01',
          description: 'หลักสูตรที่เปิดสอนในระดับ ปวช.',
          to: '/curriculum/grade2'
        },
        {
          label: 'ระดับ ปวส.',
          icon: 'hugeicons:book-02',
          description: 'หลักสูตรที่เปิดสอนในระดับ ปวส.',
          to: '/curriculum/grade3'
        },
        {
          label: 'ระดับ ป.ตรี',
          icon: 'hugeicons:book-03',
          description: 'หลักสูตรที่เปิดสอนในระดับ ป.ตรี',
          to: '/curriculum/grade4'
        },
      ]
    },
    {
      label: 'สาขาวิชา/งานในฝ่าย',
      icon: 'lets-icons:subttasks-fill',
      children: [
        {
          label: 'แผนกวิชา',
          icon: 'hugeicons:student',
          description: 'แผนกวิชา ที่เปิดสอนในระดับ ปวช. และ ปวส.',
          to: '/dept/dept'
        },
        {
          label: 'ภาควิชา',
          icon: 'hugeicons:student',
          description: 'ภาควิชา ที่เปิดสอนในระดับ ป.ตรี',
          to: '/dept/graduate'
        },
        {
          label: 'ฝ่ายวิชาการ',
          icon: 'hugeicons:student',
          description: 'งานในฝ่ายวิชาการ เช่น งานพัฒนาหลักสูตร',
          to: '/job/academic/'
        },
        {
          label: 'ฝ่ายกิจการนักเรียนนักศึกษา',
          icon: 'hugeicons:workout-run',
          description: 'งานในฝ่ายวิชาการ เช่น งานกิจกรรมฯ',
          to: '/job/activity/'
        },
        {
          label: 'ฝ่ายบริหารทรัพยากร',
          icon: 'hugeicons:permanent-job',
          description: 'งานในฝ่ายบริหารทรัพยาการ เช่น งานการเงิน',
          to: '/job/resource/'
        },
        {
          label: 'ฝ่ายแผนงานและความร่วมมือ',
          icon: 'hugeicons:bitcoin-money-02',
          description: 'งานในฝ่ายฝ่ายแผนงานและความร่วมมือ เช่น งานความร่วมมือ',
          to: '/job/plan/'
        },
      ]
    }
  ]
])

const socials = ref<NavigationMenuItem[][]>([
  [
    {
      icon: 'hugeicons:youtube',
      class: 'text-red-600',
      to: 'https://www.youtube.com/@RoiEtVocationalCollege',
      target: '_blank'
    },
    {
      icon: 'hugeicons:facebook-02',
      class: 'text-blue-600',
      to: 'https://www.facebook.com/profile.php?id=100057582813831',
      target: '_blank'
    },
    {
      icon: 'hugeicons:tiktok',
      class: 'text-gray-600',
      to: 'https://www.tiktok.com/discover/วิทยาลัยอาชีวะศึกษาร้อยเอ็ด',
      target: '_blank'
      // active: true
    }
  ]
])

const onMenuSelect = (item: any) => {
  if (item?.to) {
    open.value = false;
    // alert("go go!!!")
  }
  else {
    console.log('Menu item selected:', item);
  }
};

</script>

<template>
  <div>
    <nav class="border-b border-gray-200 dark:border-gray-600 w-full">
      <div class="lg:px-5 lg:pl-3 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button @click="open = !open" id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
              class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
              <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <a href="/" class="text-xl font-bold flex items-center lg:ml-2.5">
              <img src="/images/logo.png" class="h-12 mr-2" alt="RVC-logo">
              <span class="self-center whitespace-nowrap text-blue-900">วิทยาลัยอาชีวศึกษาร้อยเอ็ด<span
                  class="block text-sm text-zinc-700 tracking-widest">Roi Et Vocational
                  College</span></span>
            </a>
          </div>
          <div class="hidden md:flex justify-center w-1/2">

            <UNavigationMenu color="neutral" :items="items" class="w-full justify-center text-blue-700" />

          </div>
          <div class="flex justify-end">

            <UNavigationMenu :items="socials" highlight highlight-color="info" class="w-full justify-center">
              <template #item="{ item, active }">
                <ULink as-child :to="item.to" class="px-2 rounded-md transition" aria-label="Go to {{ item.label }}">
                  <span class="inline-flex items-center">
                    <UIcon v-if="item.icon" :name="item.icon" class="size-5" :class="item.class" />
                    <span>{{ item.label }}</span>
                  </span>
                </ULink>
              </template>
            </UNavigationMenu>

          </div>
        </div>
      </div>
    </nav>

    <USlideover v-model:open=open side="left" title="เมนู" close-icon="i-lucide-arrow-left" class="w-96">
      <template #content>
        <div class="flex flex-col justify-items-end h-full p-4">
          <UNavigationMenu highlight-color="secondary" orientation="vertical" :items="items" class="w-full text-xs">
            <template #item="{ item, active }">
              <ULink :to="item.to" @click="onMenuSelect(item)" class="px-2 py-1 rounded-md transition"
                aria-label="Go to {{ item.label }}">
                <span class="inline-flex items-center justify-baseline">
                  <UIcon v-if="item.icon" :name="item.icon" class="size-5 text-blue-600" :class="item.class" />
                  <span class="ms-2">{{ item.label }}</span>
                </span>
              </ULink>
            </template>
          </UNavigationMenu>
        </div>
      </template>
    </USlideover>

    <div class="bg-gray-50 py-2 md:py-4">
      <slot></slot>
    </div>
  </div>
</template>
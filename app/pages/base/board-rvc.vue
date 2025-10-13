<script lang="ts" setup>

let users: Object = [
  { name: "นางนวรัตน์ อันทรบุตร", desc: "กรรมการ", image: "/images/board-rvc/02.png" },
  { name: "นายมานพ รำจวน", desc: "กรรมการ", image: "/images/board-rvc/03.png" },
  { name: "นางสาวมุกดา ดลเจือ", desc: "กรรมการ", image: "/images/board-rvc/04.png" },
  { name: "นางสาวรัชญา คนธขจร", desc: "กรรมการ", image: "/images/board-rvc/05.png" },
  { name: "นางสาวอัปศร อุ่นสมัย", desc: "กรรมการ", image: "/images/board-rvc/06.png" },
  { name: "นายพิชิต แก้วหาดี", desc: "กรรมการ", image: "/images/board-rvc/07.png" },
  { name: "นางธริจรรยา ศรีสุธัญญาวงศ์", desc: "กรรมการ", image: "/images/board-rvc/08.png" },
  { name: "นางสาวภัทรมาศ สุ่มมาตย์", desc: "กรรมการ", image: "/images/board-rvc/09.png" },
  { name: "นางอาภรณ์ ปัตะเวสัง", desc: "กรรมการ", image: "/images/board-rvc/10.png" },
  { name: "ผศ.สุธี เกินกลาง", desc: "กรรมการ", image: "/images/board-rvc/11.png" },
  { name: "นางสาวนชนก ชุปวา", desc: "ผู้ทรงคุณวุฒิ", image: "/images/board-rvc/12.png" },
  { name: "นายถาวร วงค์คำแก้ว", desc: "ผู้ทรงคุณวุฒิ", image: "/images/board-rvc/13.png" },
  { name: "นางอัธยา พามนตรี", desc: "ผู้ทรงคุณวุฒิ", image: "/images/board-rvc/14.png" },
  { name: "นางกมลวันท์ ปริเตนัง", desc: "กรรมการและเลขานุการ", image: "/images/board-rvc/15.png" },
]

</script>

<template>
  <UContainer class="my-5">

    <div class="mx-auto mb-5">
      <img src="/images/board-rvc/01.jpg" alt="admin01" class="w-1/2 md:w-64 mx-auto rounded-3xl shadow" />
      <h2 class="text-blue-600 font-extrabold mt-4 mb-2 text-center">นายเชาวฤทธิ์ ลำพาย</h2>
      <h4 class="text-center text-sm">ประธานกรรมการ</h4>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 justify-around">
      <UCard v-for="user in users" key="user.name">
        <template #header>
          <img :src="user.image" :alt="user.name" class="w-48 object-contain mx-auto mb-4">
          <h3 class="text-center font-bold text-blue-700">{{ user.name }}</h3>
          <h4 class="text-center text-sm">{{ user.desc }}</h4>
        </template>
      </UCard>
    </div>

  </UContainer>
</template>
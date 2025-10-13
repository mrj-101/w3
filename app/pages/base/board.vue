<script lang="ts" setup>

let users: Object = [
  { name: "ผศ.สุธี เกินกลาง", desc: "กรรมการผู้แทนครูหรือคณาจารย์", image: "/images/board/02.png" },
  { name: "นายวิมพ์ นามโคตร", desc: "กรรมการผู้แทนผู้ปกครอง", image: "/images/board/03.png" },
  { name: "นางยุพา อุทัยรัตนกิจ", desc: "กรรมการผู้แทนองค์กรชุมชน", image: "/images/board/04.png" },
  { name: "นายนุชากร มาศฉมาดล", desc: "กรรมการผู้แทนองค์กรปกครองส่วนท้องถิ่น", image: "/images/board/05.png" },
  { name: "นายพงศธร ศรีรับขวา", desc: "กรรมการผู้แทนศิษย์เก่า", image: "/images/board/06.png" },
  { name: "พระครูวิมลบุญโกศล", desc: "กรรมการผู้แทนพระภิกษุสงฆ์", image: "/images/board/07.png" },
  { name: "พระครูสุตพัฒนโชติ", desc: "กรรมการผู้แทนพระภิกษุสงฆ์", image: "/images/board/08.png" },
  { name: "นายเรืองศักดิ์ รัตนโภคาสถิต", desc: "กรรมการผู้แทนสถานประกอบการ", image: "/images/board/09.png" },
  { name: "นายศิริชัย เลิศอมตะสกุล", desc: "กรรมการผู้แทนสถานประกอบการ", image: "/images/board/10.png" },
  { name: "นางณธารินี มาประจง", desc: "กรรมการผู้แทนสถานประกอบการ", image: "/images/board/11.png" },
  { name: "นายสุพจน์ ทวีกุล", desc: "กรรมการผู้แทนสถานประกอบการ", image: "/images/board/12.png" },
  { name: "นางจันทิมา สมภักดี", desc: "กรรมการผู้แทนสถานประกอบการ", image: "/images/board/13.png" },
  { name: "นายเรืองรัตน์ รัตนโภคาสถิต", desc: "กรรมการผู้ทรงคุณวุฒิ", image: "/images/board/14.png" },
  { name: "นายวิทยา ชิณโย", desc: "กรรมการผู้ทรงคุณวุฒิ", image: "/images/board/15.png" },
  { name: "ว่าที่ร้อยตรีสมโชค เฉตระการ", desc: "กรรมการผู้ทรงคุณวุฒิ", image: "/images/board/16.png" },
  { name: "นายรุ่งโรจน์ ไชยชาติ", desc: "กรรมการผู้ทรงคุณวุฒิ", image: "/images/board/17.png" },
  { name: "นายไตรรงค์ คลังบุญครอง", desc: "กรรมการผู้ทรงคุณวุฒิ", image: "/images/board/18.png" },
  { name: "นายเชาวฤทธิ์ ลำพาย", desc: "กรรมการและเลขานุการ", image: "/images/board/19.png" },
]

</script>

<template>
  <UContainer class="my-5">

    <div class="mx-auto mb-5">
      <img src="/images/board/01.png" alt="admin01" class="w-1/2 md:w-64 mx-auto rounded-3xl shadow" />
      <h2 class="text-blue-600 font-extrabold mt-4 mb-2 text-center">นายสถาพร มงคลศรีสวัสดิ์</h2>
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
<template>
  <UContainer>

    <UPageGrid class="my-8">
      <UPageCard orientation="vertical" icon="i-lucide-sun-moon" title="ข้อมูลการติดต่อ"
        class="w-full col-span-4 md:col-span-1">
        <template #description>
          <p class="text-sm mt-3">
            วิทยาลัยอาชีวศึกษาร้อยเอ็ด<br />
            เลขที่ 115 ถ.สุริยเดชบำรุง<br />
            ต.ในเมือง อ.เมืองร้อยเอ็ด จ.ร้อยเอ็ด 45000
          </p>
          <USeparator class="my-4" />
          <p class="text-sm mt-2">
            โทรศัพท์: 043-511430<br />
            โทรสาร: 043-512991<br />
            อีเมล: rvc@rvc.ac.th<br />
            เว็บไซต์: http://www.rvc.ac.th
          </p>
        </template>
      </UPageCard>
      <UPageCard orientation="vertical" icon="i-lucide-sun-moon" title="แผนที่" class="w-full col-span-4 md:col-span-2">
        <template #description class="min-w-full m-10">
          <div class="container " id="map">
            วิทยาลัยอาชีวศึกษาร้อยเอ็ด ตั้งอยู่ใจกลางเมืองร้อยเอ็ด บนถนนสุริยเดชบำรุง ใกล้สถานที่สำคัญหลายแห่ง เช่น
            บึงพลาญชัย ศาลากลางจังหวัดร้อยเอ็ด ซึ่งสามารถเดินทางได้สะดวก
            <br><br>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.158581874814!2d103.65157731416971!3d16.05725854402537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3117fdc8a9556235%3A0x862961d3fe327d25!2sRoi%20Et%20Vocational%20Education%20College!5e0!3m2!1sen!2sth!4v1603861657318!5m2!1sen!2sth"
              width="100%" height="480" frameborder="0" style="border:0;" allowfullscreen aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        </template>
      </UPageCard>
    </UPageGrid>
  </UContainer>
</template>
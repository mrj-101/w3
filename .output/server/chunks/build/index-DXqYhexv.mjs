import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-red-600">สวัสดีชาวโลก (Hello, world.)</h1><p> ช่วงเวลาที่คุณลืมตาหลังนอนหลับเต็มอิ่ม ไม่เพียงแต่เป็นการเริ่มต้นวันใหม่เท่านั้น แต่ยังเป็นช่วงเวลาสำคัญที่ร่างกายส่งสัญญาณสุขภาพภายในออกมาอย่างชัดเจน การฟื้นฟูและปรับสมดุลทางชีวภาพในตอนเช้าช่วยให้เห็นภาพรวมของสุขภาพและความพร้อมของร่างกาย </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DXqYhexv.mjs.map

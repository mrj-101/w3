import { u as useColorMode, _ as _imports_0, a as _sfc_main$2, b as _sfc_main$b, c as _sfc_main$9, d as _sfc_main$1 } from './composables-B3jwHpQ6.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import 'reka-ui';
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
import '@vueuse/core';
import './server.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'reka-ui/namespaced';
import 'tailwind-variants';
import './index-Dc-EbhPc.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let open = ref(false);
    const colorMode = useColorMode();
    colorMode.preference = "light";
    const items = ref([
      [
        {
          label: "Home",
          icon: "lets-icons:home-duotone",
          to: "/",
          cick() {
            open.value = false;
          }
        },
        {
          label: "ข้อมูลพื้นฐาน",
          icon: "iconoir:presentation",
          children: [
            {
              label: "เกี่ยวกับสถานศึกษา",
              icon: "hugeicons:school",
              description: "ประวัติ วิสัยทัศน์ พันธกิจ",
              to: "/base/rvc"
            },
            {
              label: "ผู้บริหารสถานศึกษา",
              icon: "hugeicons:manager",
              description: "ผู้บริหารสถานศึกษา, โครงสร้างการบริหาร",
              to: "/base/administrator"
            },
            {
              label: "คณะกรรมการสถานศึกษา",
              icon: "hugeicons:user-group-02",
              description: "คณะกรรมการสถานศึกษา, ชมรมผู้ปกครอง",
              to: "/base/board"
            },
            {
              label: "การติดต่อ",
              icon: "hugeicons:maps-global-01",
              description: "แผนที่ โทรศัพท์ โทรสาร อีเมล",
              to: "/base/contact"
            },
            {
              label: "ภารกิจ",
              icon: "lets-icons:desk-duotone-line",
              description: "หน้าที่ กฏหมาย",
              to: "/base/mission"
            }
          ]
        },
        {
          label: "ข้อมูลหลักสูตร",
          icon: "i-lucide-book-open",
          children: [
            {
              label: "ระดับ ปวช.",
              icon: "hugeicons:book-01",
              description: "หลักสูตรที่เปิดสอนในระดับ ปวช.",
              to: "/curriculum/grade2"
            },
            {
              label: "ระดับ ปวส.",
              icon: "hugeicons:book-02",
              description: "หลักสูตรที่เปิดสอนในระดับ ปวส.",
              to: "/curriculum/grade3"
            },
            {
              label: "ระดับ ป.ตรี",
              icon: "hugeicons:book-03",
              description: "หลักสูตรที่เปิดสอนในระดับ ป.ตรี",
              to: "/curriculum/grade4"
            }
          ]
        },
        {
          label: "สาขาวิชา/งานในฝ่าย",
          icon: "lets-icons:subttasks-fill",
          children: [
            {
              label: "แผนกวิชา",
              icon: "hugeicons:student",
              description: "แผนกวิชา ที่เปิดสอนในระดับ ปวช. และ ปวส.",
              to: "/dept/dept"
            },
            {
              label: "ภาควิชา",
              icon: "hugeicons:student",
              description: "ภาควิชา ที่เปิดสอนในระดับ ป.ตรี",
              to: "/dept/graduate"
            },
            {
              label: "ฝ่ายวิชาการ",
              icon: "hugeicons:student",
              description: "งานในฝ่ายวิชาการ เช่น งานพัฒนาหลักสูตร",
              to: "/job/academic/"
            },
            {
              label: "ฝ่ายกิจการนักเรียนนักศึกษา",
              icon: "hugeicons:workout-run",
              description: "งานในฝ่ายวิชาการ เช่น งานกิจกรรมฯ",
              to: "/job/activity/"
            },
            {
              label: "ฝ่ายบริหารทรัพยากร",
              icon: "hugeicons:permanent-job",
              description: "งานในฝ่ายบริหารทรัพยาการ เช่น งานการเงิน",
              to: "/job/resource/"
            },
            {
              label: "ฝ่ายแผนงานและความร่วมมือ",
              icon: "hugeicons:bitcoin-money-02",
              description: "งานในฝ่ายฝ่ายแผนงานและความร่วมมือ เช่น งานความร่วมมือ",
              to: "/job/plan/"
            }
          ]
        }
      ]
    ]);
    const socials = ref([
      [
        {
          icon: "hugeicons:youtube",
          class: "text-red-600",
          to: "https://www.youtube.com/@RoiEtVocationalCollege",
          target: "_blank"
        },
        {
          icon: "hugeicons:facebook-02",
          class: "text-blue-600",
          to: "https://www.facebook.com/profile.php?id=100057582813831",
          target: "_blank"
        },
        {
          icon: "hugeicons:tiktok",
          class: "text-gray-600",
          to: "https://www.tiktok.com/discover/วิทยาลัยอาชีวะศึกษาร้อยเอ็ด",
          target: "_blank"
          // active: true
        }
      ]
    ]);
    const onMenuSelect = (item) => {
      if (item?.to) {
        open.value = false;
      } else {
        console.log("Menu item selected:", item);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UNavigationMenu = _sfc_main$2;
      const _component_ULink = _sfc_main$b;
      const _component_UIcon = _sfc_main$9;
      const _component_USlideover = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="border-b border-gray-200 dark:border-gray-600 w-full"><div class="lg:px-5 lg:pl-3 py-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><a href="/" class="text-xl font-bold flex items-center lg:ml-2.5"><img${ssrRenderAttr("src", _imports_0)} class="h-12 mr-2" alt="RVC-logo"><span class="self-center whitespace-nowrap text-slate-600">วิทยาลัยอาชีวศึกษาร้อยเอ็ด<span class="block text-sm text-red-900 font-thin tracking-widest">Roi Et Vocational College</span></span></a></div><div class="hidden md:flex justify-center w-1/2">`);
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        color: "neutral",
        items: unref(items),
        class: "w-full justify-center text-blue-700"
      }, null, _parent));
      _push(`</div><div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        items: unref(socials),
        highlight: "",
        "highlight-color": "info",
        class: "w-full justify-center"
      }, {
        item: withCtx(({ item, active }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULink, {
              "as-child": "",
              to: item.to,
              class: "px-2 rounded-md transition",
              "aria-label": "Go to {{ item.label }}"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="inline-flex items-center"${_scopeId2}>`);
                  if (item.icon) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: item.icon,
                      class: ["size-5", item.class]
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>${ssrInterpolate(item.label)}</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "inline-flex items-center" }, [
                      item.icon ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: item.icon,
                        class: ["size-5", item.class]
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                      createVNode("span", null, toDisplayString(item.label), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ULink, {
                "as-child": "",
                to: item.to,
                class: "px-2 rounded-md transition",
                "aria-label": "Go to {{ item.label }}"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "inline-flex items-center" }, [
                    item.icon ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: item.icon,
                      class: ["size-5", item.class]
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(item.label), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      _push(ssrRenderComponent(_component_USlideover, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : open = $event,
        side: "left",
        title: "เมนู",
        "close-icon": "i-lucide-arrow-left",
        class: "w-96"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-items-end h-full p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              "highlight-color": "secondary",
              orientation: "vertical",
              items: unref(items),
              class: "w-full text-xs"
            }, {
              item: withCtx(({ item, active }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ULink, {
                    to: item.to,
                    onClick: ($event) => onMenuSelect(item),
                    class: "px-2 py-1 rounded-md transition",
                    "aria-label": "Go to {{ item.label }}"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="inline-flex items-center justify-baseline"${_scopeId3}>`);
                        if (item.icon) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: item.icon,
                            class: ["size-5 text-blue-600", item.class]
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span class="ms-2"${_scopeId3}>${ssrInterpolate(item.label)}</span></span>`);
                      } else {
                        return [
                          createVNode("span", { class: "inline-flex items-center justify-baseline" }, [
                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: item.icon,
                              class: ["size-5 text-blue-600", item.class]
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            createVNode("span", { class: "ms-2" }, toDisplayString(item.label), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ULink, {
                      to: item.to,
                      onClick: ($event) => onMenuSelect(item),
                      class: "px-2 py-1 rounded-md transition",
                      "aria-label": "Go to {{ item.label }}"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "inline-flex items-center justify-baseline" }, [
                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: item.icon,
                            class: ["size-5 text-blue-600", item.class]
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          createVNode("span", { class: "ms-2" }, toDisplayString(item.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-items-end h-full p-4" }, [
                createVNode(_component_UNavigationMenu, {
                  "highlight-color": "secondary",
                  orientation: "vertical",
                  items: unref(items),
                  class: "w-full text-xs"
                }, {
                  item: withCtx(({ item, active }) => [
                    createVNode(_component_ULink, {
                      to: item.to,
                      onClick: ($event) => onMenuSelect(item),
                      class: "px-2 py-1 rounded-md transition",
                      "aria-label": "Go to {{ item.label }}"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "inline-flex items-center justify-baseline" }, [
                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: item.icon,
                            class: ["size-5 text-blue-600", item.class]
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          createVNode("span", { class: "ms-2" }, toDisplayString(item.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"])
                  ]),
                  _: 1
                }, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-gray-50 py-2 md:py-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BEkxpi7F.mjs.map

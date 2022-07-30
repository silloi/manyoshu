import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    logo: "/logo.png",
    siteTitle: false,
    sidebar: [
      {
        text: "第一巻",
        items: new Array(84).fill(0).map((_, i) => {
          const number = (i + 1).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第二巻",
        items: new Array(234 - 84).fill(0).map((_, i) => {
          const number = (i + 85).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第三巻",
        items: new Array(483 - 234).fill(0).map((_, i) => {
          const number = (i + 235).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第四巻",
        items: new Array(792 - 483).fill(0).map((_, i) => {
          const number = (i + 484).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第五巻",
        items: new Array(906 - 792).fill(0).map((_, i) => {
          const number = (i + 793).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第六巻",
        items: new Array(1067 - 906).fill(0).map((_, i) => {
          const number = (i + 907).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第七巻",
        items: new Array(1417 - 1067).fill(0).map((_, i) => {
          const number = (i + 1068).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第八巻",
        items: new Array(1663 - 1417).fill(0).map((_, i) => {
          const number = (i + 1418).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第九巻",
        items: new Array(1811 - 1663).fill(0).map((_, i) => {
          const number = (i + 1664).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十巻",
        items: new Array(2350 - 1811).fill(0).map((_, i) => {
          const number = (i + 1812).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十一巻",
        items: new Array(2839 - 2350).fill(0).map((_, i) => {
          const number = (i + 2351).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十二巻",
        items: new Array(3220 - 2839).fill(0).map((_, i) => {
          const number = (i + 2840).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十三巻",
        items: new Array(3347 - 3220).fill(0).map((_, i) => {
          const number = (i + 3221).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十四巻",
        items: new Array(3577 - 3347).fill(0).map((_, i) => {
          const number = (i + 3348).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十五巻",
        items: new Array(3785 - 3577).fill(0).map((_, i) => {
          const number = (i + 3578).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十六巻",
        items: new Array(3889 - 3785).fill(0).map((_, i) => {
          const number = (i + 3786).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十七巻",
        items: new Array(4031 - 3889).fill(0).map((_, i) => {
          const number = (i + 3890).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十八巻",
        items: new Array(4138 - 4031).fill(0).map((_, i) => {
          const number = (i + 4032).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第十九巻",
        items: new Array(4292 - 4138).fill(0).map((_, i) => {
          const number = (i + 4139).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
      {
        text: "第二十巻",
        items: new Array(4516 - 4292).fill(0).map((_, i) => {
          const number = (i + 4293).toString().padStart(4, "0");
          return {
            text: number,
            link: `/${number}`,
          };
        }),
      },
    ],
  },
});

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CNL88B4M.mjs';
import { manifest } from './manifest_DmUR9AGf.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/article.astro.mjs');
const _page4 = () => import('./pages/article/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/ko/article.astro.mjs');
const _page7 = () => import('./pages/ko/article/_---slug_.astro.mjs');
const _page8 = () => import('./pages/ko/contact.astro.mjs');
const _page9 = () => import('./pages/ko/project/_slug_.astro.mjs');
const _page10 = () => import('./pages/ko/project.astro.mjs');
const _page11 = () => import('./pages/ko/tips.astro.mjs');
const _page12 = () => import('./pages/ko/tips/_---slug_.astro.mjs');
const _page13 = () => import('./pages/ko.astro.mjs');
const _page14 = () => import('./pages/project/_slug_.astro.mjs');
const _page15 = () => import('./pages/project.astro.mjs');
const _page16 = () => import('./pages/tips.astro.mjs');
const _page17 = () => import('./pages/tips/_---slug_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/article/index.astro", _page3],
    ["src/pages/article/[...slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/ko/article/index.astro", _page6],
    ["src/pages/ko/article/[...slug].astro", _page7],
    ["src/pages/ko/contact.astro", _page8],
    ["src/pages/ko/project/[slug].astro", _page9],
    ["src/pages/ko/project/index.astro", _page10],
    ["src/pages/ko/tips/index.astro", _page11],
    ["src/pages/ko/tips/[...slug].astro", _page12],
    ["src/pages/ko/index.astro", _page13],
    ["src/pages/project/[slug].astro", _page14],
    ["src/pages/project/index.astro", _page15],
    ["src/pages/tips/index.astro", _page16],
    ["src/pages/tips/[...slug].astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4c60eb6f-d226-4ead-b7e8-f0d2e0c0ee66",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

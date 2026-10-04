import{E as e,H as t,U as n,V as r,_ as i,a,b as o,c as s,d as c,n as l,o as u,p as d,v as f,x as p}from"./runtime-core.esm-bundler.Bp7PUjMx.js";import{t as m}from"./_plugin-vue_export-helper.BDNMzG2s.js";var h=d({__name:`HeroTerminal`,props:{labels:{}},setup(t,{expose:n}){n();let r=t,o=[{key:`vue`,label:`Vue`,file:`ProjectList.vue`,color:`#42b883`,tokens:[[`tag`,`<script setup lang="ts">`],[``,`
`],[`kw`,`const`],[``,` projects = `],[`fn`,`ref`],[``,`<`],[`ty`,`Project`],[``,`[]>([])
`],[`kw`,`const`],[``,` { data } = `],[`kw`,`await`],[``,` `],[`fn`,`useFetch`],[``,`(`],[`str`,`'/api/projects'`],[``,`)

`],[`kw`,`const`],[``,` featured = `],[`fn`,`computed`],[``,`(() =>
`],[``,`  projects.value.`],[`fn`,`filter`],[``,`(p => p.stars > `],[`num`,`100`],[``,`)
`],[``,`)
`],[`tag`,`<\/script>`]]},{key:`spring`,label:`Spring Boot`,file:`ProjectController.java`,color:`#6db33f`,tokens:[[`an`,`@RestController`],[``,`
`],[`an`,`@RequestMapping`],[``,`(`],[`str`,`"/api/projects"`],[``,`)
`],[`an`,`@RequiredArgsConstructor`],[``,`
`],[`kw`,`public class`],[``,` `],[`ty`,`ProjectController`],[``,` {
`],[``,`  `],[`kw`,`private final`],[``,` `],[`ty`,`ProjectService`],[``,` service;

`],[``,`  `],[`an`,`@GetMapping`],[``,`
`],[``,`  `],[`kw`,`public`],[``,` `],[`ty`,`List`],[``,`<`],[`ty`,`ProjectDto`],[``,`> `],[`fn`,`findAll`],[``,`() {
`],[``,`    `],[`kw`,`return`],[``,` service.`],[`fn`,`findFeatured`],[``,`();
`],[``,`  }
}`]]},{key:`laravel`,label:`Laravel`,file:`ProjectController.php`,color:`#ff2d20`,tokens:[[`kw`,`class`],[``,` `],[`ty`,`ProjectController`],[``,` `],[`kw`,`extends`],[``,` `],[`ty`,`Controller`],[``,`
{
`],[``,`    `],[`kw`,`public function`],[``,` `],[`fn`,`index`],[``,`(): `],[`ty`,`JsonResponse`],[``,`
    {
`],[``,`        `],[`kw`,`return`],[``,` `],[`fn`,`response`],[``,`()->`],[`fn`,`json`],[``,`(
`],[``,`            `],[`ty`,`Project`],[``,`::`],[`fn`,`with`],[``,`(`],[`str`,`'tags'`],[``,`)
`],[``,`                ->`],[`fn`,`where`],[``,`(`],[`str`,`'stars'`],[``,`, `],[`str`,`'>'`],[``,`, `],[`num`,`100`],[``,`)
`],[``,`                ->`],[`fn`,`paginate`],[``,`()
`],[``,`        );
    }
}`]]},{key:`nest`,label:`NestJS`,file:`projects.controller.ts`,color:`#e0234e`,tokens:[[`an`,`@Controller`],[``,`(`],[`str`,`'projects'`],[``,`)
`],[`kw`,`export class`],[``,` `],[`ty`,`ProjectsController`],[``,` {
`],[``,`  `],[`kw`,`constructor`],[``,`(`],[`kw`,`private readonly`],[``,` service: `],[`ty`,`ProjectsService`],[``,`) {}

`],[``,`  `],[`an`,`@Get`],[``,`()
`],[``,`  `],[`an`,`@UseGuards`],[``,`(`],[`ty`,`JwtAuthGuard`],[``,`)
`],[``,`  `],[`fn`,`findAll`],[``,`(): `],[`ty`,`Promise`],[``,`<`],[`ty`,`Project`],[``,`[]> {
`],[``,`    `],[`kw`,`return`],[``,` `],[`kw`,`this`],[``,`.service.`],[`fn`,`findFeatured`],[``,`();
`],[``,`  }
}`]]}],s=e(0),c=e(0),l=e(!0),u,d=a(()=>o[s.value]),p=a(()=>d.value.tokens.reduce((e,[,t])=>e+t.length,0)),m=a(()=>c.value>=p.value),h=a(()=>{let e=c.value,t=[];for(let[n,r]of d.value.tokens){if(e<=0)break;t.push([n,r.slice(0,e)]),e-=r.length}return t}),g=a(()=>d.value.tokens.map(([,e])=>e).join(``).split(`
`).length);function _(){m.value?l.value&&(u=setTimeout(()=>v((s.value+1)%o.length,!0),2600)):(c.value+=Math.random()>.85?3:1,u=setTimeout(_,18+Math.random()*30))}function v(e,t=!1){clearTimeout(u),t||(l.value=!1),s.value=e,c.value=0,_()}f(()=>{if(matchMedia(`(prefers-reduced-motion: reduce)`).matches){c.value=p.value;return}u=setTimeout(_,600)}),i(()=>clearTimeout(u));let y={props:r,snippets:o,active:s,typed:c,auto:l,get timer(){return u},set timer(e){u=e},current:d,totalChars:p,done:m,visible:h,lineCount:g,tick:_,select:v};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),g={class:`term-bar`},_={class:`file`},v={class:`tabs`,role:`tablist`},y=[`aria-selected`,`onClick`],b={class:`code`},x={class:`gutter`,"aria-hidden":`true`};function S(e,i,a,d,f,m){return o(),s(`div`,{class:`terminal`,style:t({"--tc":d.current.color})},[u(`div`,g,[i[0]||=u(`div`,{class:`dots`},[u(`span`),u(`span`),u(`span`)],-1),u(`span`,_,n(d.current.file),1),u(`span`,{class:r([`status`,{live:!d.done}])},n(d.done?d.props.labels.done:d.props.labels.typing),3)]),u(`div`,v,[(o(),s(l,null,p(d.snippets,(e,a)=>u(`button`,{key:e.key,role:`tab`,"aria-selected":a===d.active,class:r({on:a===d.active}),style:t({"--c":e.color}),onClick:e=>d.select(a)},[i[1]||=u(`span`,{class:`tab-dot`},null,-1),c(n(e.label),1)],14,y)),64))]),u(`div`,b,[u(`div`,x,[(o(!0),s(l,null,p(d.lineCount,e=>(o(),s(`span`,{key:e},n(e),1))),128))]),u(`pre`,null,[u(`code`,null,[(o(!0),s(l,null,p(d.visible,([e,t],i)=>(o(),s(`span`,{key:i,class:r(e)},n(t),3))),128)),i[2]||=u(`span`,{class:`caret`},null,-1)])])])],4)}var C=m(h,[[`render`,S],[`__scopeId`,`data-v-72a87ea1`]]);export{C as default};
(function(c,r,f){"use strict";const g=r.findByName("RowManager"),p=r.findByStoreName("StickersStore"),a=/https:\/\/(?:media\.discordapp\.net|discord\.com|cdn\.discordapp\.com)\/stickers\/(\d+)\.\w+/,h=[f.before("generate",g.prototype,function(n){let[e]=n;if(e.rowType!==1||e.message.stickers&&e.message.stickerItems.length>0)return;let i=e.message.content;if(!i?.length)return;const s=i.match(a);if(!s?.[1])return;const o=e.message.embeds;for(let t=0;t<o.length;t++){const d=o[t];d.type==="image"&&d.url.match(a)&&o.splice(t--,1)}const m=p.getStickerById(s[1]);e.message.stickerItems=[{id:s[1],format_type:m?.format_type??2,name:m?.name??"realsticker"}],e.message.content=""})],l=function(){for(const n of h)n()};return c.onUnload=l,c})({},vendetta.metro,vendetta.patcher);

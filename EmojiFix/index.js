(function(p,g,h){"use strict";const r=/https?:\/\/.*\/emojis\/([0-9]+).(webp|png|gif)\?.*/,j=g.ReactNative.NativeModules.DCDChatManager,b=h.before("updateRows",j,function(d){const y=d.args[1];let l=JSON.parse(y),f=[];for(let m=0;m<l.length;m++){let t=l[m];try{if(t.type==1){let u=!1;if(t.message.content)for(let c=0;c<t.message.content.length;c++){u=!0;let e=t.message.content[c];if(e.type=="link"){const o=e.target;if(r.exec(o)?.length){let a=r.exec(o),[w,s,n]=a;n=="gif"&&(t.message.animateEmoji=!0),e.type="customEmoji",e.id=s,e.src="https://cdn.discordapp.com/emojis/"+s+"."+n+"?size=160",e.frozenSrc="https://cdn.discordapp.com/emojis/"+s+"."+n+"?size=160",n=="gif"&&(e.frozenSrc="https://cdn.discordapp.com/emojis/"+s+".webp?size=160"),e.alt="unknown"}}}let i=t.message.embeds;if(i){if(!u)for(let e=0;e<i.length;e++){const o=i[e];if(o.type=="image"&&o.url){let a=r.exec(o.url),[w,s,n]=a;n=="gif"?(t.message.animateEmoji=!0,t.message.content.push({id:s,alt:"unknown",src:"https://cdn.discordapp.com/emojis/"+s+"."+n+"?size=160",frozenSrc:"https://cdn.discordapp.com/emojis/"+s+".webp?size=160",jumboable:!0,type:"customEmoji"})):t.message.content.push({id:s,alt:"unknown",src:"https://cdn.discordapp.com/emojis/"+s+"."+n,frozenSrc:"https://cdn.discordapp.com/emojis/"+s+"."+n,jumboable:!0,type:"customEmoji"})}}let c=i.slice(0);i.forEach(function(e){if(e.url&&r.exec(e.url)?.length){const o=c.findIndex(function(a){return a.url==e.url});c.splice(o,1)}}),t.message.embeds=c}}}catch{}f.push(t)}d.args[1]=JSON.stringify(f)}),z=function(){return b()};return p.onUnload=z,p})({},vendetta.metro.common,vendetta.patcher);

export function excerpt(text,query='',limit=7000){
 if(text.length<=limit)return text;
 const primary=[...new Set(query.match(/[A-Za-z]{3,}|[\u4e00-\u9fff]{2,}/g)||[])];
 const keys=['收入','成本','销量','区域','同比','YOY','预测','估值','竞争','财务','风险','股权','公式','市场','利润','毛利','增长','测算'];
 const lines=text.split(/\r?\n/).filter(Boolean);const scored=lines.map((line,i)=>({line,i,score:primary.reduce((s,k)=>s+(line.toLowerCase().includes(k.toLowerCase())?4:0),0)+keys.reduce((s,k)=>s+(line.toLowerCase().includes(k.toLowerCase())?1:0),0)+(i<4?1:0)})).sort((a,b)=>b.score-a.score||a.i-b.i);
 const chosen=[];let used=0;for(const item of scored){if(used+item.line.length>limit)continue;chosen.push(item);used+=item.line.length;if(used>limit-Math.min(300,Math.floor(limit/10)))break;}
 return '[按本次岗位检索的原文摘录，非全文审阅]\n'+chosen.sort((a,b)=>a.i-b.i).map(x=>x.line).join('\n');
}
export function auditResume(result){
 const warnings=[];for(const lang of ['zh','en']){const text=result[lang]||'';const bullets=text.split(/\r?\n/).filter(x=>/^\s*[•●-]/.test(x));const seen=new Set();for(const b of bullets){const normalized=b.replace(/\s/g,'').toLowerCase();if(seen.has(normalized))warnings.push(lang+' 存在重复条目');seen.add(normalized);if(/TODO|TBD|PLACEHOLDER|待补充|XXX|\[待确认\]/i.test(b))warnings.push(lang+' 正文包含占位内容');if(b.length>300)warnings.push(lang+' 存在较长条目，需检查拆分和实际版面');}}
 return{warnings:[...new Set(warnings)],machine:'仅完成文本结构检查，未经过招聘系统实测',human:'检查任务、具体方法、对象和交付物；不能用关键词覆盖替代个人贡献核验'};
}

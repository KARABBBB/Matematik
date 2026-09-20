const topics = [
  { slug: 'carpanlar-ve-katlar', name: 'Çarpanlar ve Katlar' },
  { slug: 'uslu-ifadeler', name: 'Üslü İfadeler' },
  { slug: 'karekoklu-ifadeler', name: 'Kareköklü İfadeler' },
  { slug: 'veri-analizi', name: 'Veri Analizi' },
  { slug: 'olasilik', name: 'Basit Olayların Olasılığı' },
  { slug: 'cebirsel-ifadeler', name: 'Cebirsel İfadeler' },
];
export function getClassData(sinif) { const number = sinif.replace('-sinif',''); return { title: `${number}. Sınıf Matematik`, topics }; }
export async function getQuestions(sinif, konu, zorluk) { const fs = await import('node:fs/promises'); const path = await import('node:path'); const fileMap = { '8-sinif/carpanlar-ve-katlar/kolay':'s8_carpanlar_kolay.json', '8-sinif/carpanlar-ve-katlar/orta':'s8_carpanlar_orta.json', '8-sinif/carpanlar-ve-katlar/zor':'s8_carpanlar_zor.json' }; const file = fileMap[`${sinif}/${konu}/${zorluk}`]; if (!file) return { title: `${getClassData(sinif).title} - ${konu} - ${zorluk}`, questions: [] }; try { const raw = await fs.readFile(path.join(process.cwd(), file), 'utf8'); return { title: `${getClassData(sinif).title} - ${konu} - ${zorluk}`, questions: JSON.parse(raw) }; } catch { return { title: 'Test', questions: [] }; } }

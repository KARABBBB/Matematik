const topics = [
  { slug: 'carpanlar-ve-katlar', name: 'Çarpanlar ve Katlar' },
  { slug: 'uslu-ifadeler', name: 'Üslü İfadeler' },
  { slug: 'karekoklu-ifadeler', name: 'Kareköklü İfadeler' },
  { slug: 'veri-analizi', name: 'Veri Analizi' },
  { slug: 'olasilik', name: 'Basit Olayların Olasılığı' },
  { slug: 'cebirsel-ifadeler', name: 'Cebirsel İfadeler' },
];

export function getClassData(sinif) {
  const number = String(sinif).replace('-sinif', '');
  return { title: `${number}. Sınıf Matematik`, topics };
}

const fileMap = {
  '8-sinif/carpanlar-ve-katlar/kolay': 's8_carpanlar_kolay.json',
  '8-sinif/carpanlar-ve-katlar/orta': 's8_carpanlar_orta.json',
  '8-sinif/carpanlar-ve-katlar/zor': 's8_carpanlar_zor.json',
};

function normalizeQuestion(question) {
  const answer = question.dogruCevap;
  const answerIndex = typeof answer === 'string'
    ? ({ A: 0, B: 1, C: 2, D: 3 }[answer.trim().toUpperCase()] ?? Number(answer))
    : answer;

  return {
    ...question,
    soru: question.soru || question.metin || '',
    secenekler: Array.isArray(question.secenekler) ? question.secenekler : [],
    dogruCevap: Number.isInteger(answerIndex) ? answerIndex : null,
  };
}

export async function getQuestions(sinif, konu, zorluk) {
  const key = `${sinif}/${konu}/${zorluk}`;
  const file = fileMap[key];
  const title = `${getClassData(sinif).title} - ${konu} - ${zorluk}`;

  if (!file) return { title, questions: [] };

  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const filePath = path.join(process.cwd(), file);
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    const questions = Array.isArray(parsed) ? parsed.map(normalizeQuestion) : [];
    return { title, questions };
  } catch (error) {
    console.error(`Test dosyası okunamadı: ${file}`, error);
    return { title, questions: [] };
  }
}

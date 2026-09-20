import Link from 'next/link';

export default function HomePage() {
  return <main><section className="hero"><div><p className="eyebrow">25+ YILLIK EĞİTİM VE ÖĞRETİM TECRÜBESİ</p><h1>Matematiği <strong>mühendis mantığıyla</strong> kavrayın.</h1><p>Mühendislik formasyonu ve çeyrek asırlık öğretmenlik birikimiyle matematiğin arkasındaki mantığı ve problem çözme sanatını öğretiyorum.</p><Link className="button" href="/test">Testlere Git →</Link></div></section><section id="iletisim" className="intro"><p className="eyebrow">ÖZGEÇMİŞ & VİZYON</p><h2>Analitik düşünce, hedef odaklı çalışma.</h2><p>Ezberci yaklaşımdan uzak, bilgiyi mantıksal süzgeçten geçiren ve sınav başarısını destekleyen çalışmalar.</p></section></main>
}

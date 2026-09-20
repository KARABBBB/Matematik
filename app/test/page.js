import Link from 'next/link';

const siniflar = [8, 9, 10, 11, 12];
export default function TestPage() { return <main className="page"><p className="eyebrow">MATEMATİK TESTLERİ</p><h1>Sınıfınızı seçin</h1><p>Devam etmek için bir sınıf seçin.</p><div className="cards">{siniflar.map(s => <Link className="card" key={s} href={`/test/${s}-sinif`}><span>0{s}</span><h2>{s}. Sınıf</h2><p>Konu testlerini görüntüle</p></Link>)}</div></main> }

import Link from 'next/link';
import { getClassData } from '../../../data/testler';

export default function ClassPage({ params }) { const data = getClassData(params.sinif); return <main className="page"><Link className="back" href="/test">← Sınıflara dön</Link><p className="eyebrow">{data.title}</p><h1>Matematik konuları</h1><p>Çalışmak istediğiniz konuyu seçin.</p><div className="cards">{data.topics.map(topic => <Link className="card" key={topic.slug} href={`/test/${params.sinif}/${topic.slug}`}><span>KONU</span><h2>{topic.name}</h2><p>Test seviyelerini görüntüle →</p></Link>)}</div></main> }

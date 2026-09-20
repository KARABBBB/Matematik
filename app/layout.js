import Link from 'next/link';
import './globals.css';

export const metadata = { title: 'Ufuk Karabiber | Matematik', description: 'Matematik testleri ve özel ders' };

export default function RootLayout({ children }) {
  return <html lang="tr"><body><header className="header"><Link href="/" className="brand">∑ <span>Ufuk Karabiber<br/><small>Matematik Öğretmeni & Mühendis</small></span></Link><nav><Link href="/">Ana Sayfa</Link><Link href="/test" className="test-link">Test</Link><a href="/#iletisim">İletişim</a></nav></header>{children}<footer>© 2026 Ufuk Karabiber - Matematik Öğretmeni & Mühendis.</footer></body></html>
}

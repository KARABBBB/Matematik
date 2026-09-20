import Link from 'next/link';
import { getQuestions } from '../../../../../data/testler';

export default async function QuizPage({ params }) {
  const result = await getQuestions(params.sinif, params.konu, params.zorluk);

  return (
    <main className="page">
      <Link className="back" href={`/test/${params.sinif}/${params.konu}`}>
        ← Seviyelere dön
      </Link>

      <p className="eyebrow">{result.title}</p>
      <h1>{result.questions.length ? 'Test soruları' : 'Test hazırlanıyor'}</h1>

      {result.questions.length > 0 ? (
        <div className="questions">
          {result.questions.map((question, index) => (
            <article className="question" key={question.id ?? index}>
              <h2>{index + 1}. {question.soru}</h2>

              <div className="options">
                {question.secenekler.map((option, optionIndex) => (
                  <div key={optionIndex}>{option}</div>
                ))}
              </div>

              {question.cozum && (
                <details>
                  <summary>Çözümü göster</summary>
                  <p>{question.cozum}</p>
                </details>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="notice">
          Bu adrese bağlı bir test bulunamadı. Dosya adını ve test eşleştirmesini kontrol edin.
        </div>
      )}
    </main>
  );
}

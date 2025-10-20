
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="page">
      <div className="page-inner" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Política de Privacidade</h1>
        <p>Última atualização: 20 de outubro de 2025</p>

        <p>
          A sua privacidade é importante para nós. É política do Dr. Jô Furlan e do site{' '}
          <Link href="/">quizpensamentointrusivo.com.br</Link> respeitar a sua privacidade em relação a
          qualquer informação sua que possamos coletar no site.
        </p>

        <h2>1. Coleta de Dados</h2>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um
          serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também
          informamos por que estamos coletando e como será usado.
        </p>
        <p>
          Durante o preenchimento do nosso quiz, coletamos as respostas fornecidas para gerar o seu
          diagnóstico. Não solicitamos nome, e-mail ou qualquer outra informação de identificação
          pessoal para a realização do quiz.
        </p>

        <h2>2. Uso de Dados</h2>
        <p>
          As informações coletadas através do quiz são usadas exclusivamente para calcular o resultado
          e apresentar o diagnóstico de impacto dos pensamentos intrusivos. Os dados são processados
          de forma anônima e agregada para fins estatísticos e de melhoria do nosso serviço.
        </p>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
          solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
          ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>

        <h2>3. Compartilhamento de Informações</h2>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
          exceto quando exigido por lei.
        </p>

        <h2>4. Cookies</h2>
        <p>
          O nosso site pode utilizar cookies para melhorar a experiência do usuário. Um cookie é um
          pequeno arquivo de texto que um site armazena no seu computador ou dispositivo móvel quando
          você visita o site.
        </p>
        <ul>
          <li>
            <strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site, como o
            progresso no quiz.
          </li>
          <li>
            <strong>Cookies de Análise:</strong> Usamos ferramentas como o Google Analytics para
            entender como os visitantes interagem com o site, de forma anônima.
          </li>
        </ul>
        <p>
          Você pode, a qualquer momento, desativar parte ou a totalidade dos nossos cookies. No
          entanto, ao desativá-los, algumas partes do nosso site poderão não funcionar corretamente.
        </p>

        <h2>5. Links para Sites de Terceiros</h2>
        <p>
          O nosso site pode ter links para sites externos que não são operados por nós, como o link
          para o vídeo no Vimeo ou para a página do curso. Esteja ciente de que não temos controle
          sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>

        <h2>6. Seus Direitos</h2>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez
          não possamos fornecer alguns dos serviços desejados (como o resultado do quiz).
        </p>
        <p>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de
          privacidade e informações pessoais.
        </p>

        <h2>7. Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais,
          entre em contato conosco através do e-mail: falecom@drjo.com.br.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className="cta">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  );
}

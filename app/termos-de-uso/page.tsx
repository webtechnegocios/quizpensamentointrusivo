
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <main className="page">
      <div className="page-inner" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Termos de Uso</h1>
        <p>Última atualização: 20 de outubro de 2025</p>

        <p>
          Bem-vindo(a) ao site{" "}
          <Link href="/">quizpensamentointrusivo.com.br</Link>, de propriedade do Dr. Jô Furlan.
          Ao acessar e utilizar nosso site, você concorda em cumprir os seguintes termos e condições
          de uso.
        </p>

        <h2>1. Objeto</h2>
        <p>
          Este site oferece um quiz interativo com o objetivo de fornecer um diagnóstico sobre o nível
          de impacto de pensamentos intrusivos na vida do usuário. O resultado é meramente
          informativo e educacional, não substituindo uma avaliação psicológica ou psiquiátrica
          profissional.
        </p>

        <h2>2. Acesso e Utilização</h2>
        <p>
          O acesso ao quiz é gratuito. Ao participar, você concorda em fornecer respostas honestas às
          perguntas para que o resultado seja o mais preciso possível. Você concorda em não utilizar o
          site para fins ilícitos ou que possam prejudicar o seu funcionamento.
        </p>

        <h2>3. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo deste site, incluindo textos, perguntas, imagens, design e o logotipo, é de
          propriedade intelectual do Dr. Jô Furlan e protegido por leis de direitos autorais. É
          proibida a reprodução, distribuição ou uso não autorizado de qualquer parte do conteúdo sem
          permissão prévia e expressa.
        </p>

        <h2>4. Limitação de Responsabilidade</h2>
        <p>
          O diagnóstico fornecido por este quiz é uma ferramenta de autoconhecimento e não possui
          caráter de diagnóstico médico ou terapêutico. O Dr. Jô Furlan não se responsabiliza pelo uso
          que os usuários fazem dos resultados ou por quaisquer decisões tomadas com base neles.
        </p>
        <p>
          Recomendamos fortemente que, caso você esteja sofrendo com pensamentos intrusivos ou
          qualquer outra questão de saúde mental, procure um profissional qualificado.
        </p>

        <h2>5. Links Externos</h2>
        <p>
          Nosso site contém links para sites de terceiros, como a plataforma de vídeo Vimeo e a página
          do curso. Não nos responsabilizamos pelo conteúdo ou pelas políticas de privacidade desses
          sites. A navegação por esses links é de sua inteira responsabilidade.
        </p>

        <h2>6. Política de Privacidade</h2>
        <p>
          A sua privacidade é de extrema importância. Para entender como coletamos e utilizamos seus
          dados, por favor, leia nossa{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>

        <h2>7. Alterações nos Termos</h2>
        <p>
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações
          entrarão em vigor imediatamente após a sua publicação no site. É sua responsabilidade
          revisar os termos periodicamente.
        </p>

        <h2>8. Contato</h2>
        <p>
          Para quaisquer dúvidas ou questões relacionadas a estes Termos de Uso, entre em contato
          conosco através do e-mail: falecom@drjo.com.br.
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
